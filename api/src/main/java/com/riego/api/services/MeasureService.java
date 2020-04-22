package com.riego.api.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import com.riego.api.converters.MeasureConverter;
import com.riego.api.entities.MeasureEntity;
import com.riego.api.models.MeasureModel;
import com.riego.api.repositories.MeasureRepository;

@Service("MeasureService")
public class MeasureService {

	/********************
	 *** Declarations ***
	 ********************/
	@Autowired
	@Qualifier("MeasureRepository")
	private MeasureRepository repository;

	@Autowired
	@Qualifier("MeasureConverter")
	private MeasureConverter converter;

	
	/***************
	 *** Methods ***
	 ***************/
	public boolean set(MeasureEntity entity) {
		
		try{
			repository.save(entity);
			return true;
		}catch (Exception e) {
			return false;
		}
	}

	

	public boolean delete(long id) {
		try{
			MeasureEntity entity = repository.findById(id);
			repository.delete(entity);
			return true;
		}catch (Exception e) {
			return false;
		}
		
	}
	
	public List<MeasureModel> getAll() {
		List<MeasureEntity> listE = repository.findAll();
		return converter.converter(listE);
	}
	
	public MeasureModel getByDate() {
		return null;
	}
	
	@EventListener
    public void appReady(ApplicationReadyEvent event) {
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		
		MeasureEntity m = new MeasureEntity();
		m.setAuthor("System");
		m.setType("StartUp");
		m.setValue("Up");
		m.setSensor("System");
		m.setUnits("time");
		m.setDate( format.format( new Date() ) );
        repository.save(m);
    }
	
	
	

}
