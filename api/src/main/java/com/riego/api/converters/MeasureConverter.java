package com.riego.api.converters;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.riego.api.entities.MeasureEntity;
import com.riego.api.models.MeasureModel;

@Component("MeasureConverter")
public class MeasureConverter {

	public List<MeasureModel> converter(List<MeasureEntity> entity) {
		List<MeasureModel> model = new ArrayList<>();
		for (MeasureEntity e : entity) {
			model.add(new MeasureModel(e));
		}
		return model;
	};

}
