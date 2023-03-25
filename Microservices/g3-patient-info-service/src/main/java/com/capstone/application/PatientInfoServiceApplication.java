package com.capstone.application;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PatientInfoServiceApplication {

	  @Bean
	    ModelMapper modelmapper() {
	        return new ModelMapper();
	    }
	
	public static void main(String[] args) {
		SpringApplication.run(PatientInfoServiceApplication.class, args);
	}

}
