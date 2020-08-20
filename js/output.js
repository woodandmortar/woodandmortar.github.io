

          var possibleInput = {
            // "hlep" : this.help(),
            "help" : function(){
              responseText("Typing COMMANDS will always bring up the main list.")
              commandReset(0);
              return
              },
            "best work" : function(){
              responseText("I will show you our best work!");
              responseImg("4.jpg");
              responseImg("1.jpg");
              responseImg("2.jpg");
              responseImg("3.jpg");
              responseImg("kitchen.jpg");
              responseText("Would you like to see more? (Yes/No)")
              commandReset(1);
              return
              },
            "about" : function(){
              responseText("Salmon.fund is a movement.");
              responseText("We stand for equal rights, public accountablility, and affordable housing.");
              responseText("Using your google account, I'll be able to remember you.");
              responseText("Would you like to connect? (Yes/No)");
              commandReset(2);
              return
              },
            "experience" : function(){
              responseText("We've completed over 20 High-end to Flips including interiors and exteriors around Kansas");
              responseText("We manage a team of highly competent sub-contractors focusing on thier continuing education.");
              responseText("Micheal Salmon, Founder and Co-Owner pays special attention to project details and workflow ensuring the best possible value.");
              responseText("Crycella Freitag, Co-Owner and human resource powerhouse manages all aspects of communication, logistics and finance.");
              responseText("Would you like to see our Business Process Manual? (Yes/No)");
              commandReset(3);
              return
            },
            "specials" : function(){
              responseText("Spring means decks, patios, and landscaping");
              responseText("We're ordering our lumber for summer projects, so all appointments made before june 29th get all lumber AT COST.");
              responseText("$6000 Two-Story decks");
              responseText("$4000 /room Water Damage Reframe");
              responseText("$2500 Emperor's Tree House");
              commandReset(4);
              return
            },
            "theme" : function(){
              responseText("Our 2020 aesthetic begin with:");
              responseText("Chic Grey Walls");
              responseText("Satin Ultra-White Trim");
              responseText("Midnight Horse Black Front Door");
              responseText("Forest Green, Faded Two-Tone Exterior");
              commandReset(5);
              return
            },
            "vision" : function(){
              responseText("Micheal Salmon plans to run for public office in 2026.");
              responseText("As an advocate for BLM, Police reform, and free education, Micheal wants to integrate technology and community responsibility.");
              responseText("Micheal believes in giving equal oppourtunity, by focusing on the issues city and state level that prevent our society from moving outside social bias.");
              responseText("Our small business tradespeople are the backbone for Kansas growth, and the future in sustained job oppourtunity.");
              commandReset(6);
              return
            },
            "contact" : function(){
              responseText("email: <a href='mailto:micheal.mfg@gmail.com?Subject=Hello%20Micheal' target='_top'>send me a message</a>");
              commandReset(7);
              return
            },
            "salmon" : function(){
              responseText("UmmmmmHmmmmmm.... Yes?");
              commandReset(8);
              return
            },
            "command" : function(){
              responseText("about, best work, contact, mcred <br> specials, theme, experience, vision");
              commandReset(9);
              return
            },
            "mcred" : function(){
              responseText("<a href='https://drive.google.com/open?id=10lbMd2b0YuqKF9mq5D9gMK6g58yQ849lJ2_LwJ3QpRI' target='_blank'>Safety Training</a> <br>  <a href='https://drive.google.com/open?id=1aovEiosNLQ2Bv09UtQuf15Pxf28PXco4ogT02ryoF1w' target='_blank'>Safety Practices</a> <br> <a href='https://drive.google.com/open?id=1OLezOcO7mLV8Jc0Mp6sy9o4HodRoHZlT67xecsrpbTM' style='color:red;' target='_blank'>Safety TEST</a>");
              responseText("<a href='https://drive.google.com/open?id=1sIbw07cA7386r0BX2-nRuf5_6BO8obgt4868zk1MMvU' target='_blank'>Drywall & Texture Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1mfcnDzY4__0RGBMBmOoUm3KWVUxoXyYwWuwHNY7M788' style='color:red;' target='_blank'>Drywall & Texture TEST</a> ");
              responseText("<a href='https://drive.google.com/open?id=1ywAJ7PvYA3WsdG1ninCW0S8H18etPnLJ_asRghmqP9I' target='_blank'>Painting Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1mKbNJ-wTZ9MlJrOtLc1Ei4C0f08HrpTnUIPmk2l_25I' style='color:red;' target='_blank'>Painting TEST</a> ");
              responseText("<a href='https://drive.google.com/open?id=16vgbiM7Y6I2D4UYYffhL44UDrJ1iHVMNTo7DJ7uQTCE' target='_blank'>Tile Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1fUV4WDuQJfwW7cukP1aoeFlR0ZgY1MVK3IWeqdO4jH4' style='color:red;' target='_blank'>Tile TEST</a> ");
              commandReset(10);
              return
            },
            "receipt" : function(){
              responseText("We'll need a photo of the receipt.");
                setTimeout(function() {window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf7j7tfOSDwOR2U5UIarKxhRsUwIlBhoJkOtSq7kDAPmUl-3Q/viewform"}, 4000);
                },

                "drywall" : function(){
           responseText("Which step of drywalling are you on?");
           responseText("Shimming <br> Hanging <br> Mudding <br> Sanding <br> Finish ");
           responseText("Type one of these into your chatbox and I'll walk you through how to move forward");
           commandReset(0);
           return
           },

         "shimming" : function(){
           responseText("So you want your walls FLAT flat, okay! ");
           responseText("Hold the longest level you have (4ft or longer is ideal) across as many studs as possible to identify low areas");
           responseText("Shim out all low areas to match the highest stud");
           responseText("Decide what kind of sheetrock you need <br> Mold resistant is great for bathrooms and basements <br> ½ in is the most common thickness for drywall <br> If you’re patching, make sure to match the existing drywall");
           responseText("Type &quot;hanging&quot; when you’re ready for the next step!");
           commandReset(0);
           return
           },

         "hanging" : function(){
           responseText("Mount drywall on the ceilings first and the walls afterwards <br> It is more difficult but yields better results")
           responseText("Mark your studs before you do anything else")
           responseText("Measure where the drywall will be mounted before hanging <br> If the edge of the drywall does not land on a stud, it should be no more than 4in away from the nearest stud");
           responseText("Cut the drywall if necessary <br> Use a T-square or chalk line to draw your cut line <br> Use a utility knife to cut the surface paper <br> IMPORTANT NOTE Utility knives should be sharp enough to achieve this with only a small amount of pressure. If your knife is not cutting, change your blade. Do NOT apply more pressure, this increases the risk of injury");
           responseText("Bend the piece at the cut line until it snaps then use the utility knife on the paper on the other side")
           responseText("For a super crisp edge, plane the edge of the piece with your utility knife or shaving tool")
           responseText("Type &quot;mudding&quot; when you’re ready for the next step");
           commandReset(0);
           return
           },

         "mudding" : function(){
           responseText("Decide what kind of drywall mud you should use <br> All Purpose matches its name and can be used almost anywhere <br> Topping gives a super smooth finish but is dense and takes a long time to dry <br> Setting Compounds, like 20 minute mud, are perfect for quick patches but should not be used as a top coat");
           responseText("Apply your mud heavily to all seams and corners");
           responseText("Place your seam tape on the heavily mudded joints");
           responseText("Using a putty knife, squeeze the tape flat. <br> Excess mud should squeeze out both sides during this step");
           responseText("Using the excess mud and as much extra mud as you need, smooth out all tape areas until the tape cannot be seen");
           responseText("Allow this layer of mud to dry THOROUGHLY before moving on to the next step");
           responseText("Type &quot;sanding&quot; when you’re ready for the next step!");
           commandReset(0);
           return
           },

         "sanding" : function(){
           responseText("All sanding should be done with the finished product in mind so keep a lighter hand than you think");
           responseText("Use a fine or super fine grit sanding sponge or sanding pad");
           responseText("Decide how you will sand <br> Sanding sponges are great for small areas like closets or trouble areas that need a little extra love <br> Sanding poles are perfect for large expanses and ceilings");
           responseText("Sand down all seams and screw holes in a circular motion until smooth");
           responseText("Special focus should be given to large floats with smoothness as the goal <br>-Pro Tip: Smooth always beats flat! Large blemishes can be worked out with a good float so don’t spoil it with over sanding!");
           responseText("It is very likely that you will have to repeat this step after you sand <br> this is called a skim coat and can be done more than once if necessary.");
           responseText("Type &quot;finish&quot; when you are ready for the next step");
           commandReset(0);
           return
           },

         "finish" : function(){
           responseText("Finish doesn’t mean the end here, just the final look!");
           responseText("Decide what type of finish your after <br> Flat <br> Texture ");
           responseText("Type one of these into your chatbox and I'll walk you through how to get your desired finish");
           return
           },

         "flat" : function(){
           responseText("You’ve decided on flat walls and ceilings! ");
           responseText("Flat is one of the most difficult finishes to pull off but I believe in you! <br> Break out the drywall mud because you will need it!");
           responseText("After the initial sanding you will definitely need a skim coat <br> You can apply the skim coat to trouble areas in the way described during mudding <br> You can also slightly water down the drywall mud to the consistency of pancake batter and roll it on with a paint roller <br> Follow the roll with a large 12in putty knife to smooth out large expanses quickly.");
           responseText("Allow all skim coat areas to dry thoroughly");
           responseText("Repeat the sanding step <br> Delicacy is key for a flat finish <br> -Pro Tip: Look at each of your areas from different angles to ensure a smooth finish from everywhere in the room");
           responseText("Apply primer in the preferred method (See priming for more details)” <br> This will allow you to see flaws and imperfections you may have missed before");
           responseText("Once the primer is dry, use paint tape to mark areas that need touch up mud <br> Before you remove the tape, allow touch ups to dry and sand each area <br> removing the paint tape before sanding makes it easier to miss spots.");
           responseText("Your walls and surfaces should now be flat. Enjoy your chic new space!");
           return
           },

       "texture" : function(){
           responseText("You’ve decided on textured walls and ceilings! ");
           responseText("Be prepared to get messy! From popcorn and knockdown to comb and crows feet, there is no clean way to do texture <br> Before we get there, first, we have to prep our surface");
           responseText("After the initial sanding you will probably need a skim coat <br> You can apply the skim coat to trouble areas in the way described during mudding <br> You can also slightly water down the drywall mud to the consistency of pancake batter and roll it on with a paint roller <br> Follow the roller with a 12in putty knife to smooth out large expanses quickly.");
           responseText("Allow all skim coat areas to dry thoroughly");
           responseText("Repeat the sanding step <br> Getting the walls as smooth as possible in a reasonable time is key <br> Textures tend to hide a lot and a flawless finish isn’t required but that doesn’t mean neglect your skim coat");
           responseText("Texture does not have to be standard and custom textures are not uncommon and can be a great way to make a bold statement");
           responseText("Regardless of what kind of texture you’re doing be it knockdown or a custom comb in a wave, the mix is key <br> Ensure your texture is thoroughly mixed and stirred<br> Clumps will clog your hoppers and gouge your product and air bubbles will ruin an otherwise perfectly textured finish ");
           responseText("If you are applying your texture with a hopper, consider protecting areas in the line of fire that are not intended to be textured <br> Texture is easy to sand down so this step is not always necessary but should be considered especially for larger areas");
           responseText("Apply the texture in the style desired and allow to dry thoroughly <br> Using a pole sander, very lightly sand for a consistent height and a crisp finish <br> When we say lightly, we mean lightly!! That pole sander should be barely touching the surface");
           responseText("Your walls and surfaces should now be textured. Enjoy your chic new space!");
           return
           },

  "tile" : function(){
      responseText("Which step of tiling are you on?");
      responseText("Leveling <br> Placement <br> Tiling <br> Grout <br> Polish ");
      responseText("Type one of these into your chatbox and I'll walk you through how to move forward");
      return
      },

    "leveling" : function(){
      responseText("For wood floors or subflooring <br> - Lay out hardie backer board (Do NOT secure yet) <br> - Shim underneath any areas that are low <br> - Secure hardie backer with specialized screws");
      responseText("For cement floors <br> - Apply autoleveling compound according to manufacturer's instructions <br> - Allow to dry thoroughly <br> - Mix thinset mortar slightly thinner than manufacturer recommendation. The consistency of pancake batter is ideal for this step <br> - Apply mortar to any dramatically lower areas using a 'float out' method");
      responseText("For walls or horizontal surfaces <br> - Identify low areas before demolition <br> - Shim out at the stud <br> - Mount drywall or hardie backer with corresponding screw type");
      return
      },

    "placement" : function(){
      responseText("All placement starts with the center line. Finding the center line is always based off of maximum visual aesthetic");
      responseText("For a single room's floor <br> - Measure the center point at each end of the room running the direction you intend your tile to run <br> - Draw or string chalk this line");
      responseText("For multiple room's floor <br> - Find the line that intersects the most rooms (halls, doorways, intersections, etc.) <br> - Place a long level or board in the area until two points of measure can be decided. <br> - For precision you may use the two points of measure but in most cases, placing a long level or board is sufficient enough for eyeing a straight center line <br> - Trace your level or board or use a chalk line to mark");
      responseText("For walls or horizontal surfaces <br> - The wall opposite of the entry to a room should be the center point <br> - Measure the center point at the top and bottom of the wall <br> - Draw or string chalk this line");
      responseText("Type &quot;place 2&quot; when you're ready for the next step");
      return
      },

    "place 2" : function(){
      responseText("Decide how you want your tile laid. For some common options and inspirations, click <a href='https://www.bunnings.com.au/diy-advice/home-improvement/tiles/10-tile-patterns-you-need-to-know'>here</a>");
      responseText("Dry lay (this means lay without any mortar or adhesive) a section large enough to establish your pattern");
      responseText("If you are tiling a ceiling, remember your dry lay should be done back side of the tile facing you");
      responseText("Dry laying on a wall is nearly impossible and we don't recommend it, but if you are really determined to, you can either draw the tiles on your wall or lay out a mock wall on the ground");
      responseText("Adjust the tiles as needed until you are confident you can achieve your pattern without excessive measuring for the real lay");
      return
      },

    "tiling" : function(){
      responseText("Mix mortar to manufacturer's specifications or prepare your tile adhesive <br> - - IMPORTANT NOTE: Tile adhesive can be used on walls and ceilings but should never be used on floors <br> - Mortar can be used on all surfaces but should be mixed a little thicker for walls and ceilings");
      responseText("Apply mortar or tile adhesive to the working surface and distribute evenly with the flat side of the trowel <br> - 90% coverage is minimum to code but 100% coverage is ideal");
      responseText("Using the toothed side of the trowel, draw lines in the mortar opposite to how the tile will be laid <br> - Pro Tip: use a bull's eye swirl when tiling ceilings for a strong suction");
      responseText("Place tiles in the desired pattern");
      responseText("Press down hard and slide the tile around slightly before resting it in its final position. This will remove air bubbles and ensure a good seal");
      responseText("Use tile spacers liberally for consistent grout lines");
      responseText("Wait at least 24 hours before moving on to the next step");
      return
      },

    "grout" : function(){
      responseText("Choose your grout type. Sanded is the most common but unsanded does have its place. For the differences, click <a href='https://homeguides.sfgate.com/sanded-vs-nonsanded-grout-tile-93501.html'>here</a>");
      responseText("Mix the grout to manufacturer's specifications <br> -Pro Tip: It is better to mix small amounts of grout and make more batches to ensure consistency");
      responseText("Using a rubber float, apply the grout to the exposed lines squeezing out air pockets as you go");
      responseText("If working on a horizontal surface, ensure the grout lines are as level to the tile as possible");
      responseText("If working on a vertical surface, run either your finger or the corner of your float over the grout line to create a small valley. This allows water to run guided down the wall");
      responseText("Just so you know, the more excess grout you have the harder the polishing step is");
      return
    },

    "polish" : function(){
      responseText("This step should be completed in concurrence with the grouting step about ten minutes after you have begun grouting.");
      responseText("Using a large sponge and a bucket of fresh water, gently wipe the excess grout off the tiles");
      responseText("Rinse your sponge frequently and change your bucket of water regularly for best results");
      responseText("Have mixed grout at the ready for touch ups on areas you may have missed or areas where you have polished too hard");
      responseText("BE THOROUGH! Once the grout has cured, removing it will be extremely difficult");
      responseText("Allow at least 24 hours (ideally 48 - 72) for grout to cure");
      responseText("Your tile project should now be complete. Enjoy your beautiful new space!");
      return
      },




// Address for each invoice




"xx1p" : function(){
      responseText("Generating...");
      document.getElementById("xx1p").innerHTML = "0";
      init4();
      document.getElementById("everything").style.display = "none";
      document.getElementById("client").style.display = "block";
      window.scrollTo(0,document.body.scrollHeight);
      return
      },

"xx2p" : function(){
      responseText("Generating...");
      document.getElementById("xx1p").innerHTML = "1";
      init4();
      document.getElementById("everything").style.display = "none";
      document.getElementById("client").style.display = "block";
      window.scrollTo(0,document.body.scrollHeight);
      return
    },
          }



                    var reactionInput = {
                      "best work" : function(){
                        responseText("On this GitHub page you'll find everything about this apps backend.");
                        responseText("<a href='https://github.com/woodandmortar/woodandmortar.github.io'>WoodandMortar on GitHub</a>")
                        animationCounter = 1;
                        return
                      },
                      "about" : function(){
                        responseText("I'll need to use GMAIL as your contact point.");
                        setTimeout(function(){
                          window.location.href = "mailto:info@woodandmortar.com?Subject=Hello%20again&body=If%20GMAIL%20didnt%20open%20please%20send%20a%20gmail%20message%20to%20my%20sender%20address"; }, 4000);
                          animationCounter = 1;
                        return
                        },
                      "experience" : function(){
                        responseText("I will redirect you a printable Business Process Manual");
                        setTimeout(function(){
                          window.location.href = "https://docs.google.com/document/d/1OAgXxoruvHMqD7lyAqu0m1Bq082rXp7g2Z1wcc-vZnY/edit?usp=sharing"; }, 6000);
                        animationCounter = 1;
                        return
                      }
                    }
