local showMenu = false


Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(IsPedSittingInAnyVehicle(GetPlayerPed(-1))) then
            if IsControlPressed(0, 288) then
                showMenu = true
                SendNUIMessage({
                    type = 'open'
                })    
                SetCursorLocation(0.5, 0.5)
                SetNuiFocus(true, true)
            end
        end
    end
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    showMenu = false
end)

RegisterNUICallback('command', function(data, cb)
    local itemId = data.itemId
    ExecuteCommand(data.itemId)
end)