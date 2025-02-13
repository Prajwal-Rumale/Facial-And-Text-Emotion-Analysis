package com.emotion.analysis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emotion.analysis.model.ImageAnalysis;

public interface ImageAnalysisRepository extends JpaRepository<ImageAnalysis, Long>{

}
