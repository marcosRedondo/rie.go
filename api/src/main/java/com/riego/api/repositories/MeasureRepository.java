package com.riego.api.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.riego.api.entities.MeasureEntity;

@Repository("MeasureRepository")
public interface MeasureRepository extends JpaRepository<MeasureEntity, Serializable> {
	
	public abstract MeasureEntity findById(long id);
	//public abstract List<TemperatureEntity> getAll();
	

}
