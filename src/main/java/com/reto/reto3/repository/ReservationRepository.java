package com.reto.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.reto.reto3.model.Reservation;
import com.reto.reto3.repository.CRUD.ReservationCrudRepoInterfaz;

@Repository
public class ReservationRepository {
    
    @Autowired
    private ReservationCrudRepoInterfaz reservationCrudRepoInterfaz;

    public List<Reservation> obtenerReservationAll(){
        return (List<Reservation>) reservationCrudRepoInterfaz.findAll();
    }

    public Optional<Reservation> obtenerReservationId(Integer id){
        return reservationCrudRepoInterfaz.findById(id);
    }

    public Reservation salvarReservation(Reservation reservation){
        return reservationCrudRepoInterfaz.save(reservation);
    }

}
