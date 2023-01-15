package com.dailyCodeBuffer.Springboottutorial.controller;

import com.dailyCodeBuffer.Springboottutorial.entity.Department;
import com.dailyCodeBuffer.Springboottutorial.service.DepartmentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;
    // ? We are not going to create any object of the DepartmentService class.
    // Spring already has the object and we are using that object by @Autowire. The
    // @Autowire will wire the particular object with the reference I have created
    // here.

    @PostMapping("/departments")
    public Department saveDepartment(@RequestBody Department department) {
        // ? with @RequestBody, we are getting entire Json object to my Department
        // object over here.
        // ? Now to save this, we have to call the service layer to pass the data, and
        // that service layer do the business logic, and after doing the business logic,
        // we can call the repository layer to save that particular data over here
        return departmentService.saveDepartment(department);
    }

    @GetMapping("/departments")
    public List<Department> fetchDepartmentList() {
        return departmentService.fetchDepartmentList();
    }

    // ? here, the part {id} is called path variable, {id} will be dynamic
    @GetMapping("/departments/{id}")
    public Department fetchDepartmentById(@PathVariable("id") Long departmentId) {
        // ? here, we need only a particular Department object based on id, that's why
        // we used Department instead of List<Department>
        // ? and fetchDepartmentById(), here we have to get this particular parameter
        // {id} by as a input parameter to the method as well
        // ? then we need to map {id} with the "department id" by writting
        // @PathVariable("id") Long departmentId
        return departmentService.fetchDepartmentById(departmentId);
        // ? here, we pass department id to department service
    }

    @DeleteMapping("/departments/{id}")
    public String deleteDepartmentById(@PathVariable("id") Long departmentId) {
        departmentService.deleteDepartmentById(departmentId);
        return "Deleted successfully";
    }

    @PutMapping("/departments/{id}")
    public Department updateDepartment(@PathVariable("id") Long departmentId, @RequestBody Department department){
        return departmentService.updateDepartment(departmentId, department);
    }
}
