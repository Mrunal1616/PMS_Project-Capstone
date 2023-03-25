package com.capstone.application.service;

import java.util.List;
import com.capstone.application.dto.PatientDto;
import com.capstone.application.model.Patient;

public interface PatientInfoService 
{

	public List<Patient> findAll();
    public PatientDto displayPatientById(Integer patientId);
    public PatientDto updatePatient(int patientId,PatientDto patientDto);


}
