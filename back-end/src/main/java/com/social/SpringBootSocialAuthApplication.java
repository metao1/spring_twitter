package com.social;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

/**
 * 
 * @author kamal berriga
 *
 */
@SpringBootApplication
public class SpringBootSocialAuthApplication {

	@Bean
	HeaderHttpSessionStrategy sessionStrategy() {
		return new HeaderHttpSessionStrategy();
	}
	public static void main(String[] args) {
		SpringApplication.run(SpringBootSocialAuthApplication.class, args);
	}
}
