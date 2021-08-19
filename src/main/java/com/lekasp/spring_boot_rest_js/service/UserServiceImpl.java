package com.lekasp.spring_boot_rest_js.service;

import com.lekasp.spring_boot_rest_js.model.Role;
import com.lekasp.spring_boot_rest_js.model.User;
import com.lekasp.spring_boot_rest_js.repository.RoleRepository;
import com.lekasp.spring_boot_rest_js.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.NoResultException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByName(String name) {
        return userRepository.getUserByName(name)
                .orElseThrow(() -> new NoResultException("No User by: " + name + " present"));
    }

    @Override
    @Transactional
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Set<Role> getRolesFromList(List<String> roleList) {
        return roleList.stream().map(role -> roleRepository.findByName("ROLE_" + role)).collect(Collectors.toSet());
    }
}