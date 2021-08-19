package com.lekasp.spring_boot_rest_js.service;


import com.lekasp.spring_boot_rest_js.model.Role;
import com.lekasp.spring_boot_rest_js.model.User;

import java.util.List;
import java.util.Set;

public interface UserService {

    List<User> getAllUser();

    User getUserByName(String name);

    void saveUser(User user);

    void deleteById(Long id);

    Set<Role> getRolesFromList(List<String> roleList);
}