package com.reto.reto3.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    
    //Una categoria a muchos partyroom 1
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "category")
    @JsonIgnoreProperties("category")
    private List<Partyroom> partyrooms;

    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Partyroom> getPartyroom() {
        return partyrooms;
    }

    public void setPartyroom(List<Partyroom> partyroom) {
        this.partyrooms = partyroom;
    }

    // una category a muchas reservation6
    //@OneToMany(mappedBy = "category")
    //@JsonIgnoreProperties("category")
    //private List<Reservation> reservations;
    //ejemplo
    //una category a muchosmmensaje7
    //@OneToMany(mappedBy = "category")
    //@JsonIgnoreProperties("category")
    //private List<Message> messages;

    
}