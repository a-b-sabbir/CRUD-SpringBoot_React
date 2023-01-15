package com.dailyCodeBuffer.Springboottutorial.repository;

import com.dailyCodeBuffer.Springboottutorial.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
}
