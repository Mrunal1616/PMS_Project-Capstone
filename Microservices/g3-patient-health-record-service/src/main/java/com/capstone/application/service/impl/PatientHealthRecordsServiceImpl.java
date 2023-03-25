package com.capstone.application.service.impl;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.application.dto.VisitDetailsDto;
import com.capstone.application.model.Prescription;
import com.capstone.application.model.Tests;
import com.capstone.application.model.VisitDetails;
import com.capstone.application.repository.PatietHealthRecordsRepository;
import com.capstone.application.repository.PrescriptionRepo;
import com.capstone.application.repository.TestRepo;
import com.capstone.application.service.PatientHealthRecordService;


@Service
public class PatientHealthRecordsServiceImpl implements PatientHealthRecordService {

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired
	private PatietHealthRecordsRepository patientHealthRecordsRepository;
	@Autowired
	private TestRepo testrepo;
	@Autowired
	private PrescriptionRepo prescriptionrepo;
	

	@Override
	public Optional<VisitDetails> findById(Integer patientId) {
		// TODO Auto-generated method stub
		
		return  patientHealthRecordsRepository.findById(patientId);
	}

	
	@Override
	public VisitDetails update(VisitDetails visitDetails) {
		// TODO Auto-generated method stub
		VisitDetails updateResponse = patientHealthRecordsRepository.save(visitDetails);
        return updateResponse;
	}
	
	public List <Tests> findTestByVisitId(Integer visitId) {
		// TODO Auto-generated method stub
		return  testrepo.findTestByVisitId(visitId);
	}
	
	@Override
	public List<Integer> findVisitIdByPatientId(Integer patientId){
		return testrepo.findVisitIdByPatientId(patientId);
	}

	@Override
	public Tests updateforTest(Tests tests) {
		// TODO Auto-generated method stub
		return testrepo.save(tests);
	}

	@Override
	public Prescription updatePrescription(Prescription prescripion) {
		// TODO Auto-generated method stub
		return prescriptionrepo.save(prescripion);
	}
	
	@Override
	public List<Prescription> findPrescriptionByVisitId(Integer visitId) {
		// TODO Auto-generated method stub
		return  prescriptionrepo.findPrescriptionByVisitId(visitId);
	}
	

	@Override
	public VisitDetailsDto createVisitDetails(VisitDetailsDto visitDetailsDto)
	{
		modelmapper.getConfiguration().setAmbiguityIgnored(true);
		VisitDetails visitHistory=modelmapper.map(visitDetailsDto, VisitDetails.class);
		VisitDetails saveadvisitHistory=patientHealthRecordsRepository.save(visitHistory);
		VisitDetailsDto savedvisitHistoryDto=modelmapper.map(saveadvisitHistory, VisitDetailsDto.class);
		return savedvisitHistoryDto;
		
	}


	@Override
	public VisitDetailsDto updateVisitDetials(int patientId, VisitDetailsDto visitDetailsDto) 
	{
		VisitDetails existingVisit=patientHealthRecordsRepository.findById(patientId).get();
		existingVisit.setHeight(visitDetailsDto.getHeight());
		existingVisit.setWeight(visitDetailsDto.getWeight());
		existingVisit.setBPdiastolic(visitDetailsDto.getBPdiastolic());
		existingVisit.setBPsystolic(visitDetailsDto.getBPsystolic());
		existingVisit.setBodyTemperature(visitDetailsDto.getBodyTemperature());
		existingVisit.setRepirationRate(visitDetailsDto.getRepirationRate());
		existingVisit.setKeyNotes(visitDetailsDto.getKeyNotes());
		
		VisitDetails updatedVisitDetails=patientHealthRecordsRepository.save(existingVisit);
		visitDetailsDto=modelmapper.map(updatedVisitDetails,VisitDetailsDto.class);
		return visitDetailsDto;
		
	}


	@Override
	public List<Prescription> findAllPriscription() {
		
		return prescriptionrepo.findAll();
	}
	
	

}
