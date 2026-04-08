package com.project.paf.modules.resource.repository;

import com.project.paf.modules.resource.model.Resource;
import com.project.paf.modules.resource.model.ResourceStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class ResourceRepositoryTest {

    @Autowired
    private ResourceRepository resourceRepository;

    @BeforeEach
    void setUp() {
        Resource r1 = new Resource();
        r1.setName("Lab 101");
        r1.setType("Lab");
        r1.setLocation("Building A");
        r1.setCapacity(30);
        r1.setAvailable(true);
        r1.setStatus(ResourceStatus.ACTIVE);
        resourceRepository.save(r1);

        Resource r2 = new Resource();
        r2.setName("Room 202");
        r2.setType("Room");
        r2.setLocation("Building B");
        r2.setCapacity(10);
        r2.setAvailable(false);
        r2.setStatus(ResourceStatus.IN_MAINTENANCE);
        resourceRepository.save(r2);
    }

    @Test
    void whenFindByType_thenReturnResources() {
        List<Resource> found = resourceRepository.findByType("Lab");
        assertThat(found).hasSize(1);
        assertThat(found.get(0).getName()).isEqualTo("Lab 101");
    }

    @Test
    void whenFindByLocation_thenReturnResources() {
        List<Resource> found = resourceRepository.findByLocation("Building B");
        assertThat(found).hasSize(1);
        assertThat(found.get(0).getName()).isEqualTo("Room 202");
    }
}
