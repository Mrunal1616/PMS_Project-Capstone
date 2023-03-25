package com.capstone.application.controller;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.application.dto.PatientDto;
import com.capstone.application.model.Email;
import com.capstone.application.model.Patient;
import com.capstone.application.service.PatientAuthenticationService;

@RestController
@CrossOrigin(origins="*")
public class AuthenticationServiceController {

	private PatientAuthenticationService patientAuthenticationService;
	
	
	public AuthenticationServiceController(PatientAuthenticationService patientAuthenticationService) {
		super();
		this.patientAuthenticationService = patientAuthenticationService;
	}

	@PostMapping("/patient/login")
	public ResponseEntity<Optional<Patient>> login(@RequestBody Email email)
	{
		Optional<Patient> patient=patientAuthenticationService.patientLogin(email.getEmail(), email.getPassword());
		return ResponseEntity.ok(patient);
		
	}
		
	@PostMapping("/patient/register")
	public PatientDto patientRegister( @RequestBody PatientDto patientDto)
	{
		return patientAuthenticationService.createPatient(patientDto);
	}
}
