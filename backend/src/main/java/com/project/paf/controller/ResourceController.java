package com.project.paf.controller;

import com.project.paf.dto.ResourceRequestDTO;
import com.project.paf.dto.ResourceResponseDTO;
import com.project.paf.service.ResourceService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping
    public List<ResourceResponseDTO> getResources(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Integer minCapacity,
            @RequestParam(required = false) Boolean available
    ) {
        boolean hasAnyFilter = name != null || type != null || location != null || minCapacity != null || available != null;
        if (hasAnyFilter) {
            return resourceService.getFilteredResources(name, type, location, minCapacity, available);
        }
        return resourceService.getAllResources();
    }

    @GetMapping("/{id}")
    public ResourceResponseDTO getResourceById(@PathVariable Long id) {
        return resourceService.getResourceById(id);
    }

    @PostMapping
    public ResponseEntity<ResourceResponseDTO> createResource(@Valid @RequestBody ResourceRequestDTO requestDTO) {
        ResourceResponseDTO created = resourceService.createResource(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResourceResponseDTO updateResource(@PathVariable Long id, @Valid @RequestBody ResourceRequestDTO requestDTO) {
        return resourceService.updateResource(id, requestDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
        return ResponseEntity.noContent().build();
    }
}
