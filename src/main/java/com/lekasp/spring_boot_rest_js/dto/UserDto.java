package com.lekasp.spring_boot_rest_js.dto;


import com.lekasp.spring_boot_rest_js.model.Role;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class UserDto {
    private Long id;
    private String name;
    private String surname;
    private String password;
    private int age;
    private String email;
    private Set<Role> roles;
    private List<String> rolesNameList = new ArrayList<>();

    public UserDto() {
    }

    public UserDto(Long id, String name, String surname, String password, int age, String email, Set<Role> roles, List<String> rolesNameList) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.age = age;
        this.email = email;
        this.roles = roles;
        this.rolesNameList = rolesNameList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public List<String> getRolesNameList() {
        return rolesNameList;
    }

    public void setRolesNameList(List<String> rolesNameList) {
        this.rolesNameList = rolesNameList;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", password='" + password + '\'' +
                ", age=" + age +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                ", rolesNameList='" + rolesNameList + '\'' +
                '}';
    }
}