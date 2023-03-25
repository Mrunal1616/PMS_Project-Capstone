package com.capstone.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.application.model.Tests;
import com.capstone.application.model.VisitDetails;

public interface TestRepo extends JpaRepository<Tests, Integer> {
	
	@Query(value="select * from test where visit_id=?1 " ,nativeQuery=true)
	List<Tests> findTestByVisitId(int visitId);
	
	@Query(value="select visit_id from visit_details where patient_id=?1", nativeQuery=true)
	List<Integer> findVisitIdByPatientId(int patientId);

}
