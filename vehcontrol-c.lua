------------------------------------------------
-- Variables
------------------------------------------------
windows = {true, true, true, true}
------------------------------------------------
-- Functions
------------------------------------------------

function doorToggle(door) -- Check door is open/closed and do opposite
    local vehicle = GetVehiclePedIsIn(GetPlayerPed(-1))
    if GetVehicleDoorAngleRatio(vehicle, door) > 0.0 then
        SetVehicleDoorShut(vehicle, door, false, false)
    else
        SetVehicleDoorOpen(vehicle, door, false, false)
    end
end

function windowToggle(window, door) -- Check window is open/closed and do opposite
    local vehicle = GetVehiclePedIsIn(GetPlayerPed(-1))
    if GetIsDoorValid(vehicle,door) and windows[window+1] then 
        RollDownWindow(vehicle, window)
        windows[window+1] = false
    else
        RollUpWindow(vehicle, window)
        windows[window+1] = true
    end
end

function engineToggle() -- Check engine is on/off and do opposite
    local player = GetPlayerPed(-1)
    local vehicle = GetVehiclePedIsIn(player)
    if(GetPedInVehicleSeat(vehicle,-1) == player) then
        if(GetIsVehicleEngineRunning(vehicle)) then 
            SetVehicleEngineOn(vehicle,false,false,true)
        else
            SetVehicleEngineOn(vehicle,true,false,true)
        end
    end
end

function changeSeat(seat) -- Check seat is empty and move to it
    local player = GetPlayerPed(-1)
    local vehicle = GetVehiclePedIsIn(player)
    if(IsVehicleSeatFree(vehicle,seat)) then
        SetPedIntoVehicle(player, vehicle, seat)
    end
end

------------------------------------------------
-- Commands
------------------------------------------------

-- Doors
RegisterCommand("hood", function()
    doorToggle(4)
end, false)

RegisterCommand("trunk", function()
    doorToggle(5)
end, false)

RegisterCommand("fldoor", function()
    doorToggle(0)
end, false)

RegisterCommand("frdoor", function()
    doorToggle(1)
end, false)

RegisterCommand("rldoor", function()
    doorToggle(2)
end, false)

RegisterCommand("rrdoor", function()
    doorToggle(3)
end, false)

--Windows

RegisterCommand("flwindow", function()
    windowToggle(0 , 0)
end, false)

RegisterCommand("frwindow", function()
    windowToggle(1 , 1)
end, false)

RegisterCommand("rrwindow", function()
    windowToggle(2 , 3)
end, false)

RegisterCommand("rlwindow", function()
    windowToggle(3 , 2)
end, false)

-- Other

RegisterCommand("engine", function()
    engineToggle()
end, false)

RegisterCommand("seat",function(source, args, raw)
    local seat = tonumber(args[1])
    changeSeat(seat)
end, false)