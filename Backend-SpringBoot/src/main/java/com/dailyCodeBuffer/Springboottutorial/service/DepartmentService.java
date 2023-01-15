package com.dailyCodeBuffer.Springboottutorial.service;

import java.util.List;

import com.dailyCodeBuffer.Springboottutorial.entity.Department;

public interface DepartmentService {
    Department saveDepartment(Department department);
    List<Department> fetchDepartmentList();
    Department fetchDepartmentById(Long departmentId);
    void deleteDepartmentById(Long departmentId);
    Department updateDepartment(Long departmentId, Department department);
}
