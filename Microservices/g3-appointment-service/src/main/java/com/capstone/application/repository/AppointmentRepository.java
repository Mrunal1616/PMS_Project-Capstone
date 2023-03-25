package com.capstone.application.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.capstone.application.model.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment,Integer>{

	@Query(value = "SELECT * from Appointment where physician_email=?1 and acceptance=?2", nativeQuery=true)
	List<Appointment> findByEmail(String physicianEmail,String acceptance);

	@Query(value = "SELECT * from Appointment where acceptance=?1", nativeQuery=true)
	List<Appointment> findByAcceptance(String acceptance);

	@Query(value = "SELECT * from Appointment where physician_email=?1 and date=?2 and acceptance=?3", nativeQuery=true)
	List<Appointment> findByEmailandDate(String physicianEmail, String date, String acceptance);

	 @Query(value = "select * from appointment where patient_id =?1 and date < now() limit 1" ,nativeQuery=true)
	 Appointment findPreviousAppointmentById(int patientId);

	 @Query(value = "select * from appointment where patient_id=:patientId" ,nativeQuery=true)
	 List<Appointment> findByPatientId(Integer patientId);
	 
	 @Query(value = "select appointment_id from appointment where patient_id =?1",nativeQuery=true)
		List findAllAppointmentsByPatientId(int patientId);
		
		@Query(value = "select * from appointment where appointment_id=?1",nativeQuery=true)
		List<Appointment> findAppointmentByAppointmentId(int appointment);

}
