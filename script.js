function GetCountable(count, countableMofrad, countableMuthanna, countableJame, zeroMessage)

{

    if(count == 0) return zeroMessage
    else if(count < 0) return "لا يمكن أن يكون العدد سالبا"
    else if( count ==1 ) return count + " " + countableMofrad
    else if (count == 2) return count + " " + countableMuthanna
    else if (count  >= 3  && count <= 10) return count + " " +  countableJame
    else if (count  > 10) return count + " " + countableMofrad

    return "ليس عددا"
}
