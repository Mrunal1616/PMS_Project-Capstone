package com.capstone.application.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.application.dto.VisitDetailsDto;
import com.capstone.application.model.Prescription;
import com.capstone.application.model.Tests;
import com.capstone.application.model.VisitDetails;
import com.capstone.application.service.PatientHealthRecordService;

@RestController
@CrossOrigin(origins="*")
public class PatientHealthRecordController {
	
	private PatientHealthRecordService patientHealthRecordService;
	
	
	public PatientHealthRecordController(PatientHealthRecordService patientHealthRecordService) {
		super();
		this.patientHealthRecordService = patientHealthRecordService;
	}

	@GetMapping("/patient/{patientId}/health-records")
	public Optional<VisitDetails> healthRecordsById(@PathVariable int patientId) 
	{
        Optional < VisitDetails > optional = patientHealthRecordService.findById(patientId);
		return optional;
	}
	
	@GetMapping("/patient/{visitId}/test-records")
	public List<Tests> findTestsByVisitId(@PathVariable int visitId) {
		 List < Tests > list= patientHealthRecordService.findTestByVisitId(visitId);
		 return list;
	}
	
	@GetMapping("/patient/{patientId}/visit-detials")
	public List<Integer> findVisitIdByPatientId(@PathVariable int patientId){
		List <Integer> list = patientHealthRecordService.findVisitIdByPatientId(patientId);
		return list;
	}
	
	@PostMapping("/patient/health-records")
	 public VisitDetailsDto insertVisitDetials(@RequestBody VisitDetailsDto visitDetailsDto) {
		return patientHealthRecordService.createVisitDetails(visitDetailsDto);
	}
	
	@PutMapping("/patient/{patientId}/health-records")
	public VisitDetailsDto updatePatientInforDoctors(@PathVariable int patientId, @RequestBody VisitDetailsDto visitDetailsDto) {
		return patientHealthRecordService.updateVisitDetials(patientId,visitDetailsDto );
	}
	
	@PostMapping("/patient/{visitId}/tests")
	public Tests updateTest(@RequestBody Tests tests)
	{
		Tests updateResponse=patientHealthRecordService.updateforTest(tests);
		return updateResponse;
		
	}
	
	@PostMapping("/patient/{visitId}/prescription")
	public Prescription updatePrescription(@RequestBody Prescription prescription) {
		Prescription updateResponse=patientHealthRecordService.updatePrescription(prescription);
		return updateResponse;
	}
	
	@GetMapping("/patient/prescription")
	public List<Prescription> findAllPrescription(){
		return patientHealthRecordService.findAllPriscription();
	}
	
	@GetMapping("/patient/{visitId}/prescription")
	public List<Prescription> findPrescriptionsByVisitId(@PathVariable int visitId) {
		 //List < Prescription > list= 
		 return patientHealthRecordService.findPrescriptionByVisitId(visitId);
	}
}
