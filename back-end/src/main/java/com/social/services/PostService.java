package com.social.services;

import com.social.dao.PostRepository;
import com.social.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Page<Post> findPosts(Long userId, Pageable pageable) {
        return postRepository.findByUserId(userId, pageable);
    }
}
