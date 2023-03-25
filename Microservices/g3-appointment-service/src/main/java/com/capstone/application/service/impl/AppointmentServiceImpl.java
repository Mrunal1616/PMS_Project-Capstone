package com.capstone.application.service.impl;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.capstone.application.model.Appointment;
import com.capstone.application.repository.AppointmentRepository;
import com.capstone.application.service.AppointmentService;



@Service
public class AppointmentServiceImpl implements AppointmentService{
	
	private AppointmentRepository appointmentRepository;

	public AppointmentServiceImpl(AppointmentRepository appointmentRepository) {
		super();
		this.appointmentRepository = appointmentRepository;
	}

	@Override
	public List<Integer> findAllAppointmentsByPatientId(int patientId) {
		return appointmentRepository.findAllAppointmentsByPatientId(patientId);
	}
	
	@Override
	public List<Appointment> findAppointmentsByAppointmentId(int appointmentId) {
		return appointmentRepository.findAppointmentByAppointmentId(appointmentId);
	}
	
	@Override
	public Appointment findPreviousAppointmentByPatientId(int patientId) {
	// TODO Auto-generated method stub
	return appointmentRepository.findPreviousAppointmentById(patientId);
	}
	@Override
	public List<Appointment> findByAppointmentById(Integer patientId) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByPatientId(patientId);
	}

	@Override
	public List<Appointment> findByAppointmentByPEmail(String physicianEmail,String acceptance) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByEmail(physicianEmail,acceptance);
	}

	@Override
	public boolean deleteAppointment(Integer appointmentId) {
		// TODO Auto-generated method stub
		appointmentRepository.deleteById(appointmentId);
		return true;
	}

	@Override
	public List<Appointment> findByAcceptedAppointment(String acceptance) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByAcceptance(acceptance);
	}

	@Override
	public Appointment update(Appointment appointment) {
		// TODO Auto-generated method stub
		Appointment updateResponse = appointmentRepository.save(appointment);
        return updateResponse;
	}

	@Override
	public List<Appointment> findByAppointmentByPEmailandDate(String physicianEmail, String date, String acceptance) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByEmailandDate(physicianEmail, date, acceptance);
	}

	@Override
	public Appointment saveAppointment(Appointment appointment) {
		// TODO Auto-generated method stub
		appointment.setAcceptance("Pending");
		return appointmentRepository.save(appointment);
	}

	

	
}
