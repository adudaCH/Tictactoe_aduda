  $(document).ready(function () {
            var playersOne = true;
            var symbol_user = "O";
            var symbol_comp = "X";
            var exit_flag = false;
            var win_user_array = ["123", "456", "789", "147", "258", "369", "159", "357"];
            var checkMove = 0;
            $(".btn").click(playersMode);

            function playersMode() {
                exit_flag = false;
                $(".socket").text("");
                $(".socket").css({ "background-color": "white" });

                if (this.id === "1player") {
                    playersOne = true;
                    checkMove = 5;
                    $(".result").text("");
                    $(".result").append(
                        "X or O? <button class='btn button btn-dark symbol_select' id='x'> X </button> <button class='btn button btn-dark symbol_select' id='o'> O </button>"
                    );
                    $(".symbol_select").click(function () {
                        if (this.id === "x") {
                            symbol_user = "X";
                            symbol_comp = "O";
                            $(".result").text("You chose " + symbol_user + "!");
                        } else if (this.id === "o") {
                            symbol_user = "O";
                            symbol_comp = "X";
                            $(".result").text("You chose " + symbol_user + "!");
                        }
                        $(".tic_tac_toe_game .socket").click(PlayerClick);
                    });
                } else if (this.id === "2player") {
                    checkMove = 9;
                    playersOne = false;
                    $(".result").text("");
                    $(".result").append(
                        "X or O? <button class='btn button btn-dark symbol_select' id='x'>X</button> <button class='btn button btn-dark symbol_select' id='o'>O</button>"
                    );
                    $(".symbol_select").click(function () {
                        if (this.id === "x") {
                            symbol_user = "X";
                            $(".result").text("Move X");
                        } else if (this.id === "o") {
                            symbol_user = "O";
                            $(".result").text("Move O");
                        }
                        $(".tic_tac_toe_game .socket").click(PlayerClick);
                    });
                }
            }

            function check_3_user(symbol) {
                for (var i = 0; i < 8; i++) {
                    var first = "cell" + win_user_array[i].substr(0, 1);
                    var second = "cell" + win_user_array[i].substr(1, 1);
                    var third = "cell" + win_user_array[i].substr(2, 1);

                    if (
                        $("." + first).text() == symbol &&
                        $("." + second).text() == symbol &&
                        $("." + third).text() == symbol
                    ) {
                        $("." + first + ",." + second + ",." + third).css(
                            "background-color",
                            "#83e2c3"
                        );
                        if (playersOne) {
                            $(".result").text("");
                            $(".result").append(
                                "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                                "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                                " <div>You win!</div>"
                            );
                            $(".btn").click(playersMode);
                            $(".socket").unbind("click");
                            exit_flag = true;
                        } else if (!playersOne) {
                            $(".result").text("");
                            $(".result").append(
                                "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                                "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                                " <div> Winner " + symbol + "!</div>"
                            );
                            $(".btn").click(playersMode);
                            $(".socket").unbind("click");
                            exit_flag = true;
                        }
                    }
                }
            }

            function check_2_comp(symbol) {
                for (var i = 0; i < 8; i++) {
                    var first = "cell" + win_user_array[i].substr(0, 1);
                    var second = "cell" + win_user_array[i].substr(1, 1);
                    var third = "cell" + win_user_array[i].substr(2, 1);

                    if (
                        $("." + first).text() == symbol &&
                        $("." + second).text() == symbol &&
                        $("." + third).text() == ""
                    ) {
                        $("." + third).text(symbol);
                        $("." + first + ",." + second + ",." + third).css(
                            "background-color",
                            "#EF7C7C"
                        );
                        $(".result").text("");
                        $(".result").append(
                            "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                            "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                            " <div>You lose!</div>"
                        );
                        $(".btn").click(playersMode);
                        $(".tic_tac_toe_game .socket").unbind("click");
                        exit_flag = true;
                    }

                    if (
                        $("." + first).text() == symbol &&
                        $("." + second).text() == "" &&
                        $("." + third).text() == symbol
                    ) {
                        $("." + second).text(symbol);
                        $("." + first + ",." + second + ",." + third).css(
                            "background-color",
                            "#EF7C7C"
                        );
                        $(".result").text("");
                        $(".result").append(
                            "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                            "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                            " <div>You lose!</div>"
                        );
                        $(".btn").click(playersMode);
                        $(".tic_tac_toe_game .socket").unbind("click");
                        exit_flag = true;
                    }

                    if (
                        $("." + first).text() == "" &&
                        $("." + second).text() == symbol &&
                        $("." + third).text() == symbol
                    ) {
                        $("." + first).text(symbol);
                        $("." + first + ",." + second + ",." + third).css(
                            "background-color",
                            "#EF7C7C"
                        );
                        $(".result").text("");
                        $(".result").append(
                            "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                            "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                            " <div>You lose!</div>"
                        );
                        $(".btn").click(playersMode);
                        $(".tic_tac_toe_game .socket").unbind("click");
                        exit_flag = true;
                    }
                }
            }

            function check_2_user(symbol) {
                for (var i = 0; i < 8; i++) {
                    var first = "cell" + win_user_array[i].substr(0, 1);
                    var second = "cell" + win_user_array[i].substr(1, 1);
                    var third = "cell" + win_user_array[i].substr(2, 1);

                    if (exit_flag == false) {
                        if (
                            $("." + first).text() == symbol &&
                            $("." + second).text() == symbol &&
                            $("." + third).text() == ""
                        ) {
                            $("." + third).text(symbol_comp);
                            exit_flag = true;
                        }
                    }

                    if (exit_flag == false) {
                        if (
                            $("." + first).text() == symbol &&
                            $("." + second).text() == "" &&
                            $("." + third).text() == symbol
                        ) {
                            $("." + second).text(symbol_comp);
                            exit_flag = true;
                        }
                    }

                    if (
                        $("." + first).text() == "" &&
                        $("." + second).text() == symbol &&
                        $("." + third).text() == symbol
                    ) {
                        $("." + first).text(symbol_comp);
                        exit_flag = true;
                    }

                    if (exit_flag) break;
                }
            }

            function PlayerClick() {
                if ($(this).text() == "" && playersOne) {
                    checkMove--;
                    $(this).text(symbol_user);
                    check_3_user(symbol_user);
                    check_2_comp(symbol_comp);
                    check_2_user(symbol_user);

                    if (exit_flag == false) {
                        for (var i = 1; i < 10; i++) {
                            if ($(".cell" + i).text() == "") {
                                $(".cell" + i).text(symbol_comp);
                                break;
                            }
                        }
                    } else exit_flag = false;
                    if (checkMove == 0 && !exit_flag) {
                        $(".result").text("");
                        $(".result").append(
                            "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                            "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                            " <div>Dead heat</div>"
                        );
                        $(".btn").click(playersMode);
                    }
                } else if ($(this).text() == "" && !playersOne) {
                    checkMove--;
                    $(this).text(symbol_user);
                    check_3_user(symbol_user);
                    if (symbol_user == "O" && !exit_flag) {
                        symbol_user = "X";
                        $(".result").text("Move X");
                    } else if (symbol_user == "X" && !exit_flag) {
                        symbol_user = "O";
                        $(".result").text("Move O");
                    }
                    if (checkMove == 0 && !exit_flag) {
                        $(".result").text("");
                        $(".result").append(
                            "<button class='btn button btn-dark' id='1player'>1 player</button>" +
                            "<button class='btn button btn-dark' id='2player'>2 player</button>" +
                            " <div>Dead heat</div>"
                        );
                        $(".btn").click(playersMode);
                    }
                }
            }
        });