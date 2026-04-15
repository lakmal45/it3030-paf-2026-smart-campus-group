package com.project.paf.modules.notification.service;

import com.mailersend.sdk.emails.Email;
import com.mailersend.sdk.MailerSend;
import com.mailersend.sdk.MailerSendResponse;
import com.mailersend.sdk.exceptions.MailerSendException;
import com.project.paf.modules.notification.model.NotificationTemplates;
import com.project.paf.modules.user.model.User;
import com.project.paf.ticket.IncidentTicket;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * Service responsible for sending all outbound notification emails
 * via the MailerSend REST API (Java SDK).
 *
 * <p>Using the API instead of SMTP removes trial-account recipient
 * restrictions and is more reliable overall.
 *
 * <p>Every public method is annotated with {@code @Async("emailTaskExecutor")}
 * so delivery is performed on a background thread and never delays
 * the HTTP response to the caller.
 *
 * <p>If sending fails the error is logged but <em>not</em> propagated —
 * email delivery is best-effort and must not break core operations.
 */
@Slf4j
@Service
public class EmailService {

    @Value("${mailersend.api-token}")
    private String apiToken;

    @Value("${mailersend.from-address}")
    private String fromAddress;

    @Value("${mailersend.from-name}")
    private String fromName;

    // ─────────────────────────────────────────────────────────────────────────
    // Generic send helpers
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Sends an HTML email via the MailerSend REST API.
     *
     * @param to          recipient email address
     * @param toName      recipient display name (can be same as email if unknown)
     * @param subject     email subject line
     * @param htmlContent HTML body
     */
    @Async("emailTaskExecutor")
    public void sendHtmlEmail(String to, String toName, String subject, String htmlContent) {
        try {
            Email email = new Email();
            email.setFrom(fromName, fromAddress);
            email.addRecipient(toName, to);
            email.setSubject(subject);
            email.setHtml(htmlContent);

            // Plain-text fallback (strip tags for simplicity)
            email.setPlain(htmlContent.replaceAll("<[^>]*>", ""));

            MailerSend ms = new MailerSend();
            ms.setToken(apiToken);

            MailerSendResponse response = ms.emails().send(email);
            log.info("Email sent via API to '{}' | subject: '{}' | messageId: {}",
                    to, subject, response.messageId);

        } catch (MailerSendException e) {
            log.error("MailerSend API error sending to '{}': code={} body={}",
                    to, e.code, e.getMessage());
        } catch (Exception e) {
            log.error("Unexpected error sending email to '{}': {}", to, e.getMessage());
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Account / Welcome notifications
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Sends a welcome email when a new user account is created.
     * Works for both normal (email/password) registration and first-time Google OAuth login.
     *
     * @param name           the new user's display name
     * @param email          the new user's email address
     * @param isGoogleSignup {@code true} if the account was created via Google OAuth
     */
    @Async("emailTaskExecutor")
    public void notifyWelcome(String name, String email, boolean isGoogleSignup) {
        if (email == null || email.isBlank()) {
            log.warn("Cannot send welcome email: email is blank");
            return;
        }
        String subject = "👋 Welcome to Smart Campus, " + name + "!";
        String html    = NotificationTemplates.welcomeEmail(name, email, isGoogleSignup);
        sendHtmlEmail(email, name, subject, html);
        log.info("Welcome notification queued for '{}' (Google={})", email, isGoogleSignup);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Ticket event notifications
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Notifies the ticket creator that their incident report has been received.
     *
     * @param ticket the newly created {@link IncidentTicket}
     */
    @Async("emailTaskExecutor")
    public void notifyTicketCreated(IncidentTicket ticket) {
        if (ticket.getCreatedBy() == null || ticket.getCreatedBy().getEmail() == null) {
            log.warn("Cannot send ticket-created email: no creator email for ticket #{}", ticket.getId());
            return;
        }
        String to      = ticket.getCreatedBy().getEmail();
        String name    = ticket.getCreatedBy().getName();
        String subject = "🎫 Ticket #" + ticket.getId() + " Received — Smart Campus";
        String html    = NotificationTemplates.ticketCreated(ticket);
        sendHtmlEmail(to, name, subject, html);
        log.info("Ticket-created notification queued for '{}'", to);
    }

    /**
     * Notifies the ticket creator that the status of their ticket has changed.
     *
     * @param ticket    the ticket after the status update
     * @param oldStatus the status before the update
     */
    @Async("emailTaskExecutor")
    public void notifyStatusChange(IncidentTicket ticket, com.project.paf.ticket.TicketStatus oldStatus) {
        if (ticket.getCreatedBy() == null || ticket.getCreatedBy().getEmail() == null) {
            log.warn("Cannot send status-change email: no creator email for ticket #{}", ticket.getId());
            return;
        }
        String to      = ticket.getCreatedBy().getEmail();
        String name    = ticket.getCreatedBy().getName();
        String subject = "🔔 Ticket #" + ticket.getId() + " Status Updated → "
                         + ticket.getStatus().name() + " — Smart Campus";
        String html    = NotificationTemplates.statusChanged(ticket, oldStatus.name());
        sendHtmlEmail(to, name, subject, html);
        log.info("Status-change notification queued for '{}' (#{}: {} → {})",
                to, ticket.getId(), oldStatus, ticket.getStatus());
    }

    /**
     * Notifies the assigned technician that they have a new ticket to work on.
     *
     * @param ticket     the ticket that was just assigned
     * @param technician the {@link User} who was assigned
     */
    @Async("emailTaskExecutor")
    public void notifyTechnicianAssigned(IncidentTicket ticket, User technician) {
        if (technician == null || technician.getEmail() == null) {
            log.warn("Cannot send technician-assigned email: technician has no email for ticket #{}",
                    ticket.getId());
            return;
        }
        String to      = technician.getEmail();
        String name    = technician.getName();
        String subject = "🔧 New Assignment: Ticket #" + ticket.getId() + " — Smart Campus";
        String html    = NotificationTemplates.technicianAssigned(ticket, technician);
        sendHtmlEmail(to, name, subject, html);
        log.info("Technician-assigned notification queued for '{}' (ticket #{})",
                to, ticket.getId());
    }
}
