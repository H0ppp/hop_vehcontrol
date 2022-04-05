RegisterServerEvent("baseevents:enteringVehicle")
RegisterServerEvent("baseevents:leftVehicle")

AddEventHandler("baseevents:enteringVehicle", function(targetVehicle, vehicleSeat, vehicleDisplayName)
    TriggerEvent("hop_vehcontrol:enterVehicle", targetVehicle, vehicleSeat)
end)

AddEventHandler("baseevents:leftVehicle", function(targetVehicle, vehicleSeat, vehicleDisplayName)
    TriggerEvent("hop_vehcontrol:exitVehicle", targetVehicle, vehicleSeat)
end)