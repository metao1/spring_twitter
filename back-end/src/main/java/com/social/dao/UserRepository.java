package com.social.dao;

import com.social.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* this the user  Repository interface  */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);

}
