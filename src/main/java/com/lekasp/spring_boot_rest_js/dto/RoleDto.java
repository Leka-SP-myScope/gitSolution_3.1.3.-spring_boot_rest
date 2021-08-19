package com.lekasp.spring_boot_rest_js.dto;

public class RoleDto {
    private Long id;
    private String roleName;
    private UserDto userDto;

    public RoleDto() {
    }

    public RoleDto(Long id, String roleName) {
        this.id = id;
        this.roleName = roleName;
    }

    public RoleDto(String roleName) {
        this.roleName = roleName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public String toString() {
        return "RoleDto{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                '}';
    }
}