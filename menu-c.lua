
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(IsPedSittingInAnyVehicle(GetPlayerPed(-1))) then -- Make sure player is in vehicle
            if IsControlPressed(0, 288) then -- If F1 pressed
                SendNUIMessage({
                    type = 'open'
                })    
                SetCursorLocation(0.5, 0.5) -- Set cursor to centre
                SetNuiFocus(true, true)
            end
        end
    end
end)

RegisterNUICallback('close', function(data, cb) -- Return focus on close
    SetNuiFocus(false, false)
end)

RegisterNUICallback('command', function(data, cb) -- Execute command from block clicked
    local itemId = data.itemId
    ExecuteCommand(itemId)
end)