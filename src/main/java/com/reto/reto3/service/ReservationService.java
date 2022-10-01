package com.reto.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reto.reto3.model.Reservation;
import com.reto.reto3.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    
    public List<Reservation> obtenerReservationall() {
        return reservationRepository.obtenerReservationAll();
    }

    public Optional<Reservation> obtenerReservationaId(Integer id) {
        return reservationRepository.obtenerReservationId(id);
    }

    public Reservation salvarReservation(Reservation reservation) {
        if(reservation.getIdReservation() == null){
            return reservationRepository.salvarReservation(reservation);

        }else{
            Optional<Reservation> reservationAuxiliar = reservationRepository.obtenerReservationId(reservation.getIdReservation());
            if (reservationAuxiliar.isEmpty()) {
                return reservationRepository.salvarReservation(reservation);
            
            }else{
                return reservation;
            }
        }
    }
    
}
