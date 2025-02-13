package com.emotion.analysis.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.emotion.analysis.model.TextAnalysis;

public interface TextAnalysisRepository extends JpaRepository<TextAnalysis, Long> {

}
