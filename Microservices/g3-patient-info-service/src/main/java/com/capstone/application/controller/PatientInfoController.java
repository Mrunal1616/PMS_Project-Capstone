package com.capstone.application.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.application.dto.PatientDto;
import com.capstone.application.model.Patient;
import com.capstone.application.service.PatientInfoService;

@RestController
@CrossOrigin(origins="*")
public class PatientInfoController {
	
	private PatientInfoService patientInfoService;

	public PatientInfoController(PatientInfoService patientInfoService) 
	{
		super();
		this.patientInfoService = patientInfoService;
	}

	
	@GetMapping("/patient/{patientId}")
	public PatientDto getPatientById(@PathVariable int patientId) 
	{
        
		return patientInfoService.displayPatientById(patientId);
	}
	
	@PutMapping("/patient/{patientId}")
	 public PatientDto updatePatientInfo(@PathVariable int patientId, @RequestBody PatientDto patientDto) 
	{
       
		return patientInfoService.updatePatient(patientId, patientDto);
	}

	
	@GetMapping("/patient")
	public List<Patient> PatientList() {
		List < Patient > patient = patientInfoService.findAll();
		
		return patient;
	}

}
