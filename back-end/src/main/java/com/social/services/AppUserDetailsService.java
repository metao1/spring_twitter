package com.social.services;

import com.social.entities.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


/**
 * This Service class for providing the user credentials from the database.
 *
 * @author Mehrdad A.Karami
 */
@Service
public class AppUserDetailsService implements UserDetailsService {

    Logger logger = LoggerFactory.getLogger("UserDetails");

    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.find(username);
        logger.info("finding user...{}", user.getUsername());
        return user;
    }

}
