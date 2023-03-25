package com.capstone.application.service.impl;

import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capstone.application.dto.PatientDto;
import com.capstone.application.model.Patient;
import com.capstone.application.repository.PatientAuthenticationRepository;
import com.capstone.application.service.PatientAuthenticationService;

@Service
public class PatientAuthenticationServiceImpl implements PatientAuthenticationService{
	
	@Autowired
	private ModelMapper modelmapper;

	private PatientAuthenticationRepository patientAuthenticationRepository;
	
	public PatientAuthenticationServiceImpl(PatientAuthenticationRepository patientAuthenticationRepository) {
		super();
		this.patientAuthenticationRepository = patientAuthenticationRepository;
	}

	@Override
	public Patient save(Patient patient) {
		return patientAuthenticationRepository.save(patient);

	}

	@Override
	public Optional<Patient> patientLogin(String email, String password) {
		// TODO Auto-generated method stub
		return patientAuthenticationRepository.authenticateByEmailandPassword(email,password);
		
	}
	
	@Override
	public PatientDto createPatient(PatientDto patinetDto) {
		Patient patient=modelmapper.map(patinetDto, Patient.class);
		Patient saveadPatient=patientAuthenticationRepository.save(patient);
		PatientDto savedPatientDto=modelmapper.map(saveadPatient, PatientDto.class);
		return savedPatientDto;
	}

}
