package com.lekasp.spring_boot_rest_js.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final MyUserDetailsService userDetailsService;
    private final LoginSuccesHandler loginSuccesHandler;

    public SecurityConfig(MyUserDetailsService userDetailsService,
                          LoginSuccesHandler loginSuccesHandler) {
        this.userDetailsService = userDetailsService;
        this.loginSuccesHandler = loginSuccesHandler;
    }

    @Override
    @Autowired
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                //.formLogin().usernameParameter("email").permitAll()
                .formLogin().loginPage("/login").usernameParameter("email").permitAll()
                .successHandler(loginSuccesHandler)
                .and()
                .authorizeRequests()
                .antMatchers("/**/*.css").permitAll()
                .antMatchers("/static/*.css").permitAll()
                .antMatchers("/**/*.js").permitAll()
                .antMatchers("/static/*.js").permitAll()
                .antMatchers("/user").access("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
                .antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
                .anyRequest().authenticated()
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .permitAll();
    }

    @Bean
    protected BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}