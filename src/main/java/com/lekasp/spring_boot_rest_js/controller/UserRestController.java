package com.lekasp.spring_boot_rest_js.controller;

import com.lekasp.spring_boot_rest_js.dto.UserDto;
import com.lekasp.spring_boot_rest_js.model.User;
import com.lekasp.spring_boot_rest_js.repository.RoleRepository;
import com.lekasp.spring_boot_rest_js.repository.UserRepository;
import com.lekasp.spring_boot_rest_js.service.UserConverter;
import com.lekasp.spring_boot_rest_js.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private final UserService userService;
    private final RoleRepository roleRepository;
    private final UserConverter userConverter;
    private final UserRepository userRepository;
    private List<UserDto> allUsers;

    @Autowired
    public UserRestController(UserService userService,
                              RoleRepository roleRepository,
                              UserConverter userConverter,
                              UserRepository userRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
        this.userConverter = userConverter;
        this.userRepository = userRepository;
    }

    @GetMapping("/user")
    public List<User> getAllUsersForUser() {
        return userService.getAllUser();

//        allUsers = userService.getAllUser().stream()
//                .map(userConverter::fromUserToUserDto).collect(Collectors.toList());
//        return allUsers.stream().map(userConverter::fromUserDtoToUser).collect(Collectors.toList());
    }

    @GetMapping("/currentUser")
    public String getCurrentUser(Principal principal) {
        return principal.getName();
    }

    @GetMapping("/users")
    public List<User> getAllUsersForAdmin() {
        return userService.getAllUser();

//        allUsers = userService.getAllUser().stream()
//                .map(userConverter::fromUserToUserDto).collect(Collectors.toList());
//        return allUsers.stream().map(userConverter::fromUserDtoToUser).collect(Collectors.toList());
    }

    @PostMapping("/users")
    public User createUser(@RequestBody UserDto userDto) {
        User user = userConverter.fromUserDtoToUser(userDto);
        userService.saveUser(user);
        return user;
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody UserDto userDto) {
        User user = userConverter.fromUserDtoToUser(userDto);
        userService.saveUser(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return "User with ID = " + id + " was deleted";
    }

//--------------------------The_begining_code---------------------------------------------------------------------------
//    @GetMapping("/user")
//    public String getAllUsersForUser(Model model) {
//        allUsers = userService.getAllUser().stream()
//                .map(userConverter::fromUserToUserDto).collect(Collectors.toList());
//        model.addAttribute("allUser", allUsers);
//        return "user_page";
//    }
//
//    @GetMapping("/admin/users")
//    public String getAllUsersForAdmin(Model model) {
//        allUsers = userService.getAllUser().stream()
//                .map(userConverter::fromUserToUserDto).collect(Collectors.toList());
//        model.addAttribute("allUser", allUsers);
//        model.addAttribute("listRoles", roleRepository.findAll());
//        model.addAttribute("user", new UserDto());
//        return "admin_page";
//    }
//
//    @PostMapping("/admin/users")
//    public String createUser(@ModelAttribute("user") UserDto userDto,
//                             @RequestParam("rolesNameList") List<String> rolesNameList) {
//        User user = userConverter.fromUserDtoToUser(userDto);
//        user.setRoles(userService.getRolesFromList(rolesNameList));
//        userService.saveUser(user);
//        return "redirect:/admin/users";
//    }
//
//    @PostMapping("/admin/delete")
//    public String deleteUser(@RequestParam("id") Long id) {
//        userService.deleteById(id);
//        return "redirect:/admin/users";
//    }
}