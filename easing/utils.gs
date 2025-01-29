func get_back_bounce_constant(p) {
    # Formula from Vaschex on stackoverflow (optimised):
    # https://stackoverflow.com/questions/46624541/how-to-calculate-this-constant-in-various-easing-functions
    # Allows you to calculate a different value that 1.70158 for the back easing. 1.70158 = 10% bounce
    
    local p = $p / 10;
    local m27p = -27 * p;
    local m27p_sqrd = m27p * m27p;

    local c1 = ((-1166400 * p + 2 * m27p_sqrd * m27p) - 524880 * p * p) / 3456000;
    local c2 = sqrt(c1 * c1 + (-6480 * p - m27p_sqrd) * (-6480 * p - m27p_sqrd) * (-6480 * p - m27p_sqrd) / 2985984000000);

    return POW(c2 - c1, 1.0 / 3.0) + 
           POW(-c1 - c2, 1.0 / 3.0) 
           - m27p / 120;
}
