package com.emotion.analysis.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "image_analysis")

public class ImageAnalysis {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String imagePath;
    
    @Column(nullable = false)
    private String emotion;
}
