AddEventHandler("baseevents:enteringVehicle", function(targetVehicle, vehicleSeat, vehicleDisplayName)
    if(Config.disableAutostart) then 
        SetVehicleEngineOn(targetVehicle,false,false,true)
    end
end)