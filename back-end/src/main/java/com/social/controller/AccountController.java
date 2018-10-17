package com.social.controller;

import com.social.entities.Post;
import com.social.entities.User;
import com.social.services.PostService;
import com.social.services.UserService;
import com.social.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;

/**
 * @author kamal berriga
 */
@RestController
@RequestMapping("/account")
public class AccountController {

    public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    // request method to create a new account by a guest

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @CrossOrigin(origins = "*", maxAge = 3600)
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        logger.info("registering user");
        if (userService.find(newUser.getUsername()) != null) {
            logger.error("username Already exist " + newUser.getUsername());
            return new ResponseEntity(
                    new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
                    HttpStatus.CONFLICT);
        }
        newUser.setRole("ADMIN");

        return new ResponseEntity<>(userService.save(newUser), HttpStatus.CREATED);
    }
    // this is the login api/service

    @GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }

    @GetMapping("/token")
    @ResponseBody
    public Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }

    @RequestMapping("/login")
    @ResponseBody
    @CrossOrigin(origins = "*", maxAge = 3600)
    public Principal user(Principal principal) {
        logger.info("user logged " + principal);
        return principal;
    }

    @RequestMapping(value = "/{user_id}/posts", method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = {"x-auth-token", "x-requested-with", "x-xsrf-token", "Content-Type"})
    public Page<Post> getPosts(@PathVariable String user_id, Pageable pageable) {
        logger.info("user {} requested for posts", user_id);
        if (postService.findPosts(Long.valueOf(user_id), pageable) == null) {
            logger.error("there are not post for user {}", user_id);
            return null;
        }

        return postService.findPosts(Long.valueOf(user_id), pageable);
    }

}
