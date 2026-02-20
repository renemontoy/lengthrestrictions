import { useState, useMemo } from "react";

export default function PutterLength() {
  const PlumbershaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "40 3/4\"",
        "PXG Straight II": "40 3/4\"",
        "PXG Straight III": "40 3/4\"",
        "PXG Pistol I": "40 3/4\"",
        "PXG Pistol II": "40 3/4\"",
        "PXG Pistol III": "40 3/4\"",
        "PXG Slant 1.5": "40 3/4\"",
        "PXG Slant Pistol": "40 3/4\"",
        "PXG Slant Pistol Mid": "40 3/4\"",
        "PXG XL": "40 3/4\"",
        "Super Stroke Flatso 1.0": "40 3/4\"",
        "Super Stroke Flatso 2.0": "40 3/4\"",
        "Super Stroke Flatso 3.0": "40 3/4\"",
        "Super Stroke Fatso 5.0": "40 3/4\"",
        "Super Stroke Pistol 1.0": "40 3/4\"",
        "Super Stroke Pistol 2.0": "40 3/4\"",
        "Super Stroke Pistol 3.0": "40 3/4\"",
        "Super Stroke Plus 2.0 XL": "40 3/4\"",
        "SinkFit": "40 3/4\"",
        "Winn Excell 15\"": "40 3/4\""
      }
  };

  const PlumbershaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "35 3/4\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "31 3/4\"",
        "SinkFit": "26 1/2\"",
        "Winn Excell 15\"": "29 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "29 1/2\"",
        "PXG Straight II": "29 1/2\"",
        "PXG Straight III": "29 1/2\"",
        "PXG Pistol I": "29 1/2\"",
        "PXG Pistol II": "29 1/2\"",
        "PXG Pistol III": "29 1/2\"",
        "PXG Slant 1.5": "29 1/2\"",
        "PXG Slant Pistol": "29 1/2\"",
        "PXG Slant Pistol Mid": "29 1/2\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "29 1/2\"",
        "Super Stroke Flatso 2.0": "29 1/2\"",
        "Super Stroke Flatso 3.0": "29 1/2\"",
        "Super Stroke Fatso 5.0": "29 1/2\"",
        "Super Stroke Pistol 1.0": "29 1/2\"",
        "Super Stroke Pistol 2.0": "29 1/2\"",
        "Super Stroke Pistol 3.0": "29 1/2\"",
        "Super Stroke Plus 2.0 XL": "32\"",
        "SinkFit": "27\"",
        "Winn Excell 15\"": "29 1/2\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "31 3/4\"",
        "PXG Straight II": "31 3/4\"",
        "PXG Straight III": "31 3/4\"",
        "PXG Pistol I": "31 3/4\"",
        "PXG Pistol II": "31 3/4\"",
        "PXG Pistol III": "31 3/4\"",
        "PXG Slant 1.5": "31 3/4\"",
        "PXG Slant Pistol": "31 3/4\"",
        "PXG Slant Pistol Mid": "31 3/4\"",
        "PXG XL": "38\"",
        "Super Stroke Flatso 1.0": "31 3/4\"",
        "Super Stroke Flatso 2.0": "31 3/4\"",
        "Super Stroke Flatso 3.0": "31 3/4\"",
        "Super Stroke Fatso 5.0": "31 3/4\"",
        "Super Stroke Pistol 1.0": "31 3/4\"",
        "Super Stroke Pistol 2.0": "31 3/4\"",
        "Super Stroke Pistol 3.0": "31 3/4\"",
        "Super Stroke Plus 2.0 XL": "33 3/4\"",
        "SinkFit": "27\"",
        "Winn Excell 15\"": "31 3/4\""
      }
  };

    const HeelhaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "40\"",
        "PXG Straight II": "40\"",
        "PXG Straight III": "40\"",
        "PXG Pistol I": "40\"",
        "PXG Pistol II": "40\"",
        "PXG Pistol III": "40\"",
        "PXG Slant 1.5": "40\"",
        "PXG Slant Pistol": "40\"",
        "PXG Slant Pistol Mid": "40\"",
        "PXG XL": "40\"",
        "Super Stroke Flatso 1.0": "40\"",
        "Super Stroke Flatso 2.0": "40\"",
        "Super Stroke Flatso 3.0": "40\"",
        "Super Stroke Fatso 5.0": "40\"",
        "Super Stroke Pistol 1.0": "40\"",
        "Super Stroke Pistol 2.0": "40\"",
        "Super Stroke Pistol 3.0": "40\"",
        "Super Stroke Plus 2.0 XL": "40\"",
        "SinkFit": "40\"",
        "Winn Excell 15\"": "40\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "40\"",
        "PXG Straight II": "40\"",
        "PXG Straight III": "40\"",
        "PXG Pistol I": "40\"",
        "PXG Pistol II": "40\"",
        "PXG Pistol III": "40\"",
        "PXG Slant 1.5": "40\"",
        "PXG Slant Pistol": "40\"",
        "PXG Slant Pistol Mid": "40\"",
        "PXG XL": "40\"",
        "Super Stroke Flatso 1.0": "40\"",
        "Super Stroke Flatso 2.0": "40\"",
        "Super Stroke Flatso 3.0": "40\"",
        "Super Stroke Fatso 5.0": "40\"",
        "Super Stroke Pistol 1.0": "40\"",
        "Super Stroke Pistol 2.0": "40\"",
        "Super Stroke Pistol 3.0": "40\"",
        "Super Stroke Plus 2.0 XL": "40\"",
        "SinkFit": "40\"",
        "Winn Excell 15\"": "40\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "40 1/2\"",
        "PXG Straight II": "40 1/2\"",
        "PXG Straight III": "40 1/2\"",
        "PXG Pistol I": "40 1/2\"",
        "PXG Pistol II": "40 1/2\"",
        "PXG Pistol III": "40 1/2\"",
        "PXG Slant 1.5": "40 1/2\"",
        "PXG Slant Pistol": "40 1/2\"",
        "PXG Slant Pistol Mid": "40 1/2\"",
        "PXG XL": "40 1/2\"",
        "Super Stroke Flatso 1.0": "40 1/2\"",
        "Super Stroke Flatso 2.0": "40 1/2\"",
        "Super Stroke Flatso 3.0": "40 1/2\"",
        "Super Stroke Fatso 5.0": "40 1/2\"",
        "Super Stroke Pistol 1.0": "40 1/2\"",
        "Super Stroke Pistol 2.0": "40 1/2\"",
        "Super Stroke Pistol 3.0": "40 1/2\"",
        "Super Stroke Plus 2.0 XL": "40 1/2\"",
        "SinkFit": "40 1/2\"",
        "Winn Excell 15\"": "40 1/2\""
      }
  };

    const HeelhaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "29\"",
        "PXG Straight II": "29\"",
        "PXG Straight III": "29\"",
        "PXG Pistol I": "29\"",
        "PXG Pistol II": "29\"",
        "PXG Pistol III": "29\"",
        "PXG Slant 1.5": "29\"",
        "PXG Slant Pistol": "29\"",
        "PXG Slant Pistol Mid": "29\"",
        "PXG XL": "35 1/2\"",
        "Super Stroke Flatso 1.0": "29\"",
        "Super Stroke Flatso 2.0": "29\"",
        "Super Stroke Flatso 3.0": "29\"",
        "Super Stroke Fatso 5.0": "29\"",
        "Super Stroke Pistol 1.0": "29\"",
        "Super Stroke Pistol 2.0": "29\"",
        "Super Stroke Pistol 3.0": "29\"",
        "Super Stroke Plus 2.0 XL": "31 1/2\"",
        "SinkFit": "26 1/2\"",
        "Winn Excell 15\"": "29\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "35 3/4\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "31 3/4\"",
        "SinkFit": "26 1/2\"",
        "Winn Excell 15\"": "29 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "31 1/4\"",
        "PXG Straight II": "31 1/4\"",
        "PXG Straight III": "31 1/4\"",
        "PXG Pistol I": "31 1/4\"",
        "PXG Pistol II": "31 1/4\"",
        "PXG Pistol III": "31 1/4\"",
        "PXG Slant 1.5": "31 1/4\"",
        "PXG Slant Pistol": "31 1/4\"",
        "PXG Slant Pistol Mid": "31 1/4\"",
        "PXG XL": "37 3/4\"",
        "Super Stroke Flatso 1.0": "31 1/4\"",
        "Super Stroke Flatso 2.0": "31 1/4\"",
        "Super Stroke Flatso 3.0": "31 1/4\"",
        "Super Stroke Fatso 5.0": "31 1/4\"",
        "Super Stroke Pistol 1.0": "31 1/4\"",
        "Super Stroke Pistol 2.0": "31 1/4\"",
        "Super Stroke Pistol 3.0": "31 1/4\"",
        "Super Stroke Plus 2.0 XL": "33 1/4\"",
        "SinkFit": "26 3/4\"",
        "Winn Excell 15\"": "31 1/4\""
      }
  };

  const DoubleshaftMaxList = {
      "M16 Double Bend Black" : {
        "PXG Straight I": '39 3/4"',
        "PXG Straight II": '39 3/4"',
        "PXG Straight III": '39 3/4"',
        "PXG Pistol I": '39 3/4"',
        "PXG Pistol II": '39 3/4"',
        "PXG Pistol III": '39 3/4"',
        "PXG Slant 1.5": '39 3/4"',
        "PXG Slant Pistol":'39 3/4"',
        "PXG Slant Pistol Mid": '39 3/4"',
        "PXG XL": '39 3/4"',
        "Super Stroke Flatso 1.0": '39 3/4"',
        "Super Stroke Flatso 2.0": '39 3/4"',
        "Super Stroke Flatso 3.0": '39 3/4"',
        "Super Stroke Fatso 5.0": '39 3/4"',
        "Super Stroke Pistol 1.0": '39 3/4"',
        "Super Stroke Pistol 2.0": '39 3/4"',
        "Super Stroke Pistol 3.0": '39 3/4"',
        "Super Stroke Plus 2.0 XL": '39 3/4"',
        "SinkFit": '39 3/4"',
        "Winn Excell 15\"": '39 3/4"'
      },
      "M16 Double Bend Chrome" : {
        "PXG Straight I": '39 3/4"',
        "PXG Straight II": '39 3/4"',
        "PXG Straight III": '39 3/4"',
        "PXG Pistol I": '39 3/4"',
        "PXG Pistol II": '39 3/4"',
        "PXG Pistol III": '39 3/4"',
        "PXG Slant 1.5": '39 3/4"',
        "PXG Slant Pistol":'39 3/4"',
        "PXG Slant Pistol Mid": '39 3/4"',
        "PXG XL": '39 3/4"',
        "Super Stroke Flatso 1.0": '39 3/4"',
        "Super Stroke Flatso 2.0": '39 3/4"',
        "Super Stroke Flatso 3.0": '39 3/4"',
        "Super Stroke Fatso 5.0": '39 3/4"',
        "Super Stroke Pistol 1.0": '39 3/4"',
        "Super Stroke Pistol 2.0": '39 3/4"',
        "Super Stroke Pistol 3.0": '39 3/4"',
        "Super Stroke Plus 2.0 XL": '39 3/4"',
        "SinkFit": '39 3/4"',
        "Winn Excell 15\"": '39 3/4"'
      },
      "Double Bend Steel Chrome" : {
        "PXG Straight I": '39 1/2"',
        "PXG Straight II": '39 1/2"',
        "PXG Straight III": '39 1/2"',
        "PXG Pistol I": '39 1/2"',
        "PXG Pistol II": '39 1/2"',
        "PXG Pistol III": '39 1/2"',
        "PXG Slant 1.5": '39 1/2"',
        "PXG Slant Pistol":'39 1/2"',
        "PXG Slant Pistol Mid": '39 1/2"',
        "PXG XL": '39 1/2"',
        "Super Stroke Flatso 1.0": '39 1/2"',
        "Super Stroke Flatso 2.0": '39 1/2"',
        "Super Stroke Flatso 3.0": '39 1/2"',
        "Super Stroke Fatso 5.0": '39 1/2"',
        "Super Stroke Pistol 1.0": '39 1/2"',
        "Super Stroke Pistol 2.0": '39 1/2"',
        "Super Stroke Pistol 3.0": '39 1/2"',
        "Super Stroke Plus 2.0 XL": '39 1/2"',
        "SinkFit": '39 1/2"',
        "Winn Excell 15\"": '39 1/2"'
      }
  };

  const DoubleshaftMinList = {
      "M16 Double Bend Black" : {
        "PXG Straight I": '28 3/4"',
        "PXG Straight II": '28 3/4"',
        "PXG Straight III": '28 3/4"',
        "PXG Pistol I": '28 3/4"',
        "PXG Pistol II": '28 3/4"',
        "PXG Pistol III": '28 3/4"',
        "PXG Slant 1.5": '28 3/4"',
        "PXG Slant Pistol":'28 3/4"',
        "PXG Slant Pistol Mid": '28 3/4"',
        "PXG XL": '35"',
        "Super Stroke Flatso 1.0": '28 3/4"',
        "Super Stroke Flatso 2.0": '28 3/4"',
        "Super Stroke Flatso 3.0": '28 3/4"',
        "Super Stroke Fatso 5.0": '28 3/4"',
        "Super Stroke Pistol 1.0": '28 3/4"',
        "Super Stroke Pistol 2.0": '28 3/4"',
        "Super Stroke Pistol 3.0": '28 3/4"',
        "Super Stroke Plus 2.0 XL": '31 3/4"',
        "SinkFit": '26"',
        "Winn Excell 15\"": '28 3/4"'
      },
      "M16 Double Bend Chrome" : {
        "PXG Straight I": '35 1/4"',
        "PXG Straight II": '35 1/4"',
        "PXG Straight III": '35 1/4"',
        "PXG Pistol I": '35 1/4"',
        "PXG Pistol II": '35 1/4"',
        "PXG Pistol III": '35 1/4"',
        "PXG Slant 1.5": '35 1/4"',
        "PXG Slant Pistol":'35 1/4"',
        "PXG Slant Pistol Mid": '35 1/4"',
        "PXG XL": 'Not Possible',
        "Super Stroke Flatso 1.0": '35 1/4"',
        "Super Stroke Flatso 2.0": '35 1/4"',
        "Super Stroke Flatso 3.0": '35 1/4"',
        "Super Stroke Fatso 5.0": '35 1/4"',
        "Super Stroke Pistol 1.0": '35 1/4"',
        "Super Stroke Pistol 2.0": '35 1/4"',
        "Super Stroke Pistol 3.0": '35 1/4"',
        "Super Stroke Plus 2.0 XL": '36 3/4"',
        "SinkFit": '28 1/2"',
        "Winn Excell 15\"": '35 1/4"'
      },
      "Double Bend Steel Chrome" : {
        "PXG Straight I": '35 1/2"',
        "PXG Straight II": '35 1/2"',
        "PXG Straight III": '35 1/2"',
        "PXG Pistol I": '35 1/2"',
        "PXG Pistol II": '35 1/2"',
        "PXG Pistol III": '35 1/2"',
        "PXG Slant 1.5": '35 1/2"',
        "PXG Slant Pistol":'35 1/2"',
        "PXG Slant Pistol Mid": '35 1/2"',
        "PXG XL": 'Not Possible',
        "Super Stroke Flatso 1.0": '35 1/2"',
        "Super Stroke Flatso 2.0": '35 1/2"',
        "Super Stroke Flatso 3.0": '35 1/2"',
        "Super Stroke Fatso 5.0": '35 1/2"',
        "Super Stroke Pistol 1.0": '35 1/2"',
        "Super Stroke Pistol 2.0": '35 1/2"',
        "Super Stroke Pistol 3.0": '35 1/2"',
        "Super Stroke Plus 2.0 XL": '37 1/2"',
        "SinkFit": '31 1/4"',
        "Winn Excell 15\"": '35 1/2"'
      }
  };

  const ZeroAllanshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": '40 1/4"',
        "PXG Straight II": '40 1/4"',
        "PXG Straight III": '40 1/4"',
        "PXG Pistol I": '40 1/4"',
        "PXG Pistol II": '40 1/4"',
        "PXG Pistol III": '40 1/4"',
        "PXG Slant 1.5": '40 1/4"',
        "PXG Slant Pistol": '40 1/4"',
        "PXG Slant Pistol Mid": '40 1/4"',
        "PXG XL": '40 1/4"',
        "Super Stroke Flatso 1.0": '40 1/4"',
        "Super Stroke Flatso 2.0": '40 1/4"',
        "Super Stroke Flatso 3.0": '40 1/4"',
        "Super Stroke Fatso 5.0": '40 1/4"',
        "Super Stroke Pistol 1.0": '40 1/4"',
        "Super Stroke Pistol 2.0": '40 1/4"',
        "Super Stroke Pistol 3.0": '40 1/4"',
        "Super Stroke Plus 2.0 XL": '40 1/4"',
        "SinkFit": '40 1/4"',
        "Winn Excell 15\"": '40 1/4"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '40 1/4"',
        "PXG Straight II": '40 1/4"',
        "PXG Straight III": '40 1/4"',
        "PXG Pistol I": '40 1/4"',
        "PXG Pistol II": '40 1/4"',
        "PXG Pistol III": '40 1/4"',
        "PXG Slant 1.5": '40 1/4"',
        "PXG Slant Pistol": '40 1/4"',
        "PXG Slant Pistol Mid": '40 1/4"',
        "PXG XL": '40 1/4"',
        "Super Stroke Flatso 1.0": '40 1/4"',
        "Super Stroke Flatso 2.0": '40 1/4"',
        "Super Stroke Flatso 3.0": '40 1/4"',
        "Super Stroke Fatso 5.0": '40 1/4"',
        "Super Stroke Pistol 1.0": '40 1/4"',
        "Super Stroke Pistol 2.0": '40 1/4"',
        "Super Stroke Pistol 3.0": '40 1/4"',
        "Super Stroke Plus 2.0 XL": '40 1/4"',
        "SinkFit": '40 1/4"',
        "Winn Excell 15\"": '40 1/4"'
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": '40 3/4"',
        "PXG Straight II": '40 3/4"',
        "PXG Straight III": '40 3/4"',
        "PXG Pistol I": '40 3/4"',
        "PXG Pistol II": '40 3/4"',
        "PXG Pistol III": '40 3/4"',
        "PXG Slant 1.5": '40 3/4"',
        "PXG Slant Pistol": '40 3/4"',
        "PXG Slant Pistol Mid": '40 3/4"',
        "PXG XL": '40 3/4"',
        "Super Stroke Flatso 1.0": '40 3/4"',
        "Super Stroke Flatso 2.0": '40 3/4"',
        "Super Stroke Flatso 3.0": '40 3/4"',
        "Super Stroke Fatso 5.0": '40 3/4"',
        "Super Stroke Pistol 1.0": '40 3/4"',
        "Super Stroke Pistol 2.0": '40 3/4"',
        "Super Stroke Pistol 3.0": '40 3/4"',
        "Super Stroke Plus 2.0 XL": '40 3/4"',
        "SinkFit": '40 3/4"',
        "Winn Excell 15\"": '40 3/4"'
      }
  };

  const ZeroAllanshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": '29"',
        "PXG Straight II": '29"',
        "PXG Straight III": '29"',
        "PXG Pistol I": '29"',
        "PXG Pistol II": '29"',
        "PXG Pistol III": '29"',
        "PXG Slant 1.5": '29"',
        "PXG Slant Pistol": '29"',
        "PXG Slant Pistol Mid": '29"',
        "PXG XL": '35 1/4"',
        "Super Stroke Flatso 1.0": '29"',
        "Super Stroke Flatso 2.0": '29"',
        "Super Stroke Flatso 3.0": '29"',
        "Super Stroke Fatso 5.0": '29"',
        "Super Stroke Pistol 1.0": '29"',
        "Super Stroke Pistol 2.0": '29"',
        "Super Stroke Pistol 3.0": '29"',
        "Super Stroke Plus 2.0 XL": '32 1/2"',
        "SinkFit": '27"',
        "Winn Excell 15\"": '29"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '29 1/4"',
        "PXG Straight II": '29 1/4"',
        "PXG Straight III": '29 1/4"',
        "PXG Pistol I": '29 1/4"',
        "PXG Pistol II": '29 1/4"',
        "PXG Pistol III": '29 1/4"',
        "PXG Slant 1.5": '29 1/4"',
        "PXG Slant Pistol": '29 1/4"',
        "PXG Slant Pistol Mid": '29 1/4"',
        "PXG XL": '36"',
        "Super Stroke Flatso 1.0": '29 1/4"',
        "Super Stroke Flatso 2.0": '29 1/4"',
        "Super Stroke Flatso 3.0": '29 1/4"',
        "Super Stroke Fatso 5.0": '29 1/4"',
        "Super Stroke Pistol 1.0": '29 1/4"',
        "Super Stroke Pistol 2.0": '29 1/4"',
        "Super Stroke Pistol 3.0": '29 1/4"',
        "Super Stroke Plus 2.0 XL": '32 1/2"',
        "SinkFit": '28"',
        "Winn Excell 15\"": '29 1/4"'
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": '31"',
        "PXG Straight II": '31"',
        "PXG Straight III": '31"',
        "PXG Pistol I": '31"',
        "PXG Pistol II": '31"',
        "PXG Pistol III": '31"',
        "PXG Slant 1.5": '31"',
        "PXG Slant Pistol": '31"',
        "PXG Slant Pistol Mid": '31"',
        "PXG XL": '36"',
        "Super Stroke Flatso 1.0": '31"',
        "Super Stroke Flatso 2.0": '31"',
        "Super Stroke Flatso 3.0": '31"',
        "Super Stroke Fatso 5.0": '31"',
        "Super Stroke Pistol 1.0": '31"',
        "Super Stroke Pistol 2.0": '31"',
        "Super Stroke Pistol 3.0": '31"',
        "Super Stroke Plus 2.0 XL": '32 1/2"',
        "SinkFit": '28"',
        "Winn Excell 15\"": '31"'
      }
  };

  const ZeroMustangshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "40 3/4\"",
        "PXG Straight II": "40 3/4\"",
        "PXG Straight III": "40 3/4\"",
        "PXG Pistol I": "40 3/4\"",
        "PXG Pistol II": "40 3/4\"",
        "PXG Pistol III": "40 3/4\"",
        "PXG Slant 1.5": "40 3/4\"",
        "PXG Slant Pistol": "40 3/4\"",
        "PXG Slant Pistol Mid": "40 3/4\"",
        "PXG XL": "40 3/4\"",
        "Super Stroke Flatso 1.0": "40 3/4\"",
        "Super Stroke Flatso 2.0": "40 3/4\"",
        "Super Stroke Flatso 3.0": "40 3/4\"",
        "Super Stroke Fatso 5.0": "40 3/4\"",
        "Super Stroke Pistol 1.0": "40 3/4\"",
        "Super Stroke Pistol 2.0": "40 3/4\"",
        "Super Stroke Pistol 3.0": "40 3/4\"",
        "Super Stroke Plus 2.0 XL": "40 3/4\"",
        "SinkFit": "40 3/4\"",
        "Winn Excell 15\"": "40 3/4\""
      }
  };

  const ZeroMustangshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "29\"",
        "PXG Straight II": "29\"",
        "PXG Straight III": "29\"",
        "PXG Pistol I": "29\"",
        "PXG Pistol II": "29\"",
        "PXG Pistol III": "29\"",
        "PXG Slant 1.5": "29\"",
        "PXG Slant Pistol": "29\"",
        "PXG Slant Pistol Mid": "29\"",
        "PXG XL": "35 1/4\"",
        "Super Stroke Flatso 1.0": "29\"",
        "Super Stroke Flatso 2.0": "29\"",
        "Super Stroke Flatso 3.0": "29\"",
        "Super Stroke Fatso 5.0": "29\"",
        "Super Stroke Pistol 1.0": "29\"",
        "Super Stroke Pistol 2.0": "29\"",
        "Super Stroke Pistol 3.0": "29\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "27\"",
        "Winn Excell 15\"": "29\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "29 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "31\"",
        "PXG Straight II": "31\"",
        "PXG Straight III": "31\"",
        "PXG Pistol I": "31\"",
        "PXG Pistol II": "31\"",
        "PXG Pistol III": "31\"",
        "PXG Slant 1.5": "31\"",
        "PXG Slant Pistol": "31\"",
        "PXG Slant Pistol Mid": "31\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "31\"",
        "Super Stroke Flatso 2.0": "31\"",
        "Super Stroke Flatso 3.0": "31\"",
        "Super Stroke Fatso 5.0": "31\"",
        "Super Stroke Pistol 1.0": "31\"",
        "Super Stroke Pistol 2.0": "31\"",
        "Super Stroke Pistol 3.0": "31\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "31\""
      }
  };

  const ZeroHellcatshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "40 3/4\"",
        "PXG Straight II": "40 3/4\"",
        "PXG Straight III": "40 3/4\"",
        "PXG Pistol I": "40 3/4\"",
        "PXG Pistol II": "40 3/4\"",
        "PXG Pistol III": "40 3/4\"",
        "PXG Slant 1.5": "40 3/4\"",
        "PXG Slant Pistol": "40 3/4\"",
        "PXG Slant Pistol Mid": "40 3/4\"",
        "PXG XL": "40 3/4\"",
        "Super Stroke Flatso 1.0": "40 3/4\"",
        "Super Stroke Flatso 2.0": "40 3/4\"",
        "Super Stroke Flatso 3.0": "40 3/4\"",
        "Super Stroke Fatso 5.0": "40 3/4\"",
        "Super Stroke Pistol 1.0": "40 3/4\"",
        "Super Stroke Pistol 2.0": "40 3/4\"",
        "Super Stroke Pistol 3.0": "40 3/4\"",
        "Super Stroke Plus 2.0 XL": "40 3/4\"",
        "SinkFit": "40 3/4\"",
        "Winn Excell 15\"": "40 3/4\""
      }
  };

  const ZeroHellcatshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "29\"",
        "PXG Straight II": "29\"",
        "PXG Straight III": "29\"",
        "PXG Pistol I": "29\"",
        "PXG Pistol II": "29\"",
        "PXG Pistol III": "29\"",
        "PXG Slant 1.5": "29\"",
        "PXG Slant Pistol": "29\"",
        "PXG Slant Pistol Mid": "29\"",
        "PXG XL": "35 1/4\"",
        "Super Stroke Flatso 1.0": "29\"",
        "Super Stroke Flatso 2.0": "29\"",
        "Super Stroke Flatso 3.0": "29\"",
        "Super Stroke Fatso 5.0": "29\"",
        "Super Stroke Pistol 1.0": "29\"",
        "Super Stroke Pistol 2.0": "29\"",
        "Super Stroke Pistol 3.0": "29\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "27\"",
        "Winn Excell 15\"": "29\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "29 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "31\"",
        "PXG Straight II": "31\"",
        "PXG Straight III": "31\"",
        "PXG Pistol I": "31\"",
        "PXG Pistol II": "31\"",
        "PXG Pistol III": "31\"",
        "PXG Slant 1.5": "31\"",
        "PXG Slant Pistol": "31\"",
        "PXG Slant Pistol Mid": "31\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "31\"",
        "Super Stroke Flatso 2.0": "31\"",
        "Super Stroke Flatso 3.0": "31\"",
        "Super Stroke Fatso 5.0": "31\"",
        "Super Stroke Pistol 1.0": "31\"",
        "Super Stroke Pistol 2.0": "31\"",
        "Super Stroke Pistol 3.0": "31\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "31\""
      }
  };

  const ZeroBatshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "40 1/4\"",
        "PXG Straight II": "40 1/4\"",
        "PXG Straight III": "40 1/4\"",
        "PXG Pistol I": "40 1/4\"",
        "PXG Pistol II": "40 1/4\"",
        "PXG Pistol III": "40 1/4\"",
        "PXG Slant 1.5": "40 1/4\"",
        "PXG Slant Pistol": "40 1/4\"",
        "PXG Slant Pistol Mid": "40 1/4\"",
        "PXG XL": "40 1/4\"",
        "Super Stroke Flatso 1.0": "40 1/4\"",
        "Super Stroke Flatso 2.0": "40 1/4\"",
        "Super Stroke Flatso 3.0": "40 1/4\"",
        "Super Stroke Fatso 5.0": "40 1/4\"",
        "Super Stroke Pistol 1.0": "40 1/4\"",
        "Super Stroke Pistol 2.0": "40 1/4\"",
        "Super Stroke Pistol 3.0": "40 1/4\"",
        "Super Stroke Plus 2.0 XL": "40 1/4\"",
        "SinkFit": "40 1/4\"",
        "Winn Excell 15\"": "40 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "40 3/4\"",
        "PXG Straight II": "40 3/4\"",
        "PXG Straight III": "40 3/4\"",
        "PXG Pistol I": "40 3/4\"",
        "PXG Pistol II": "40 3/4\"",
        "PXG Pistol III": "40 3/4\"",
        "PXG Slant 1.5": "40 3/4\"",
        "PXG Slant Pistol": "40 3/4\"",
        "PXG Slant Pistol Mid": "40 3/4\"",
        "PXG XL": "40 3/4\"",
        "Super Stroke Flatso 1.0": "40 3/4\"",
        "Super Stroke Flatso 2.0": "40 3/4\"",
        "Super Stroke Flatso 3.0": "40 3/4\"",
        "Super Stroke Fatso 5.0": "40 3/4\"",
        "Super Stroke Pistol 1.0": "40 3/4\"",
        "Super Stroke Pistol 2.0": "40 3/4\"",
        "Super Stroke Pistol 3.0": "40 3/4\"",
        "Super Stroke Plus 2.0 XL": "40 3/4\"",
        "SinkFit": "40 3/4\"",
        "Winn Excell 15\"": "40 3/4\""
      }
  };

  const ZeroBatshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "29\"",
        "PXG Straight II": "29\"",
        "PXG Straight III": "29\"",
        "PXG Pistol I": "29\"",
        "PXG Pistol II": "29\"",
        "PXG Pistol III": "29\"",
        "PXG Slant 1.5": "29\"",
        "PXG Slant Pistol": "29\"",
        "PXG Slant Pistol Mid": "29\"",
        "PXG XL": "35 1/4\"",
        "Super Stroke Flatso 1.0": "29\"",
        "Super Stroke Flatso 2.0": "29\"",
        "Super Stroke Flatso 3.0": "29\"",
        "Super Stroke Fatso 5.0": "29\"",
        "Super Stroke Pistol 1.0": "29\"",
        "Super Stroke Pistol 2.0": "29\"",
        "Super Stroke Pistol 3.0": "29\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "27\"",
        "Winn Excell 15\"": "29\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "29 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "31\"",
        "PXG Straight II": "31\"",
        "PXG Straight III": "31\"",
        "PXG Pistol I": "31\"",
        "PXG Pistol II": "31\"",
        "PXG Pistol III": "31\"",
        "PXG Slant 1.5": "31\"",
        "PXG Slant Pistol": "31\"",
        "PXG Slant Pistol Mid": "31\"",
        "PXG XL": "36\"",
        "Super Stroke Flatso 1.0": "31\"",
        "Super Stroke Flatso 2.0": "31\"",
        "Super Stroke Flatso 3.0": "31\"",
        "Super Stroke Fatso 5.0": "31\"",
        "Super Stroke Pistol 1.0": "31\"",
        "Super Stroke Pistol 2.0": "31\"",
        "Super Stroke Pistol 3.0": "31\"",
        "Super Stroke Plus 2.0 XL": "32 1/2\"",
        "SinkFit": "28\"",
        "Winn Excell 15\"": "31\""
      }
  };

  const ZeroHotshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": "38 1/2\"",
        "PXG Straight II": "38 1/2\"",
        "PXG Straight III": "38 1/2\"",
        "PXG Pistol I": "38 1/2\"",
        "PXG Pistol II": "38 1/2\"",
        "PXG Pistol III": "38 1/2\"",
        "PXG Slant 1.5": "38 1/2\"",
        "PXG Slant Pistol": "38 1/2\"",
        "PXG Slant Pistol Mid": "38 1/2\"",
        "PXG XL": "38 1/2\"",
        "Super Stroke Flatso 1.0": "38 1/2\"",
        "Super Stroke Flatso 2.0": "38 1/2\"",
        "Super Stroke Flatso 3.0": "38 1/2\"",
        "Super Stroke Fatso 5.0": "38 1/2\"",
        "Super Stroke Pistol 1.0": "38 1/2\"",
        "Super Stroke Pistol 2.0": "38 1/2\"",
        "Super Stroke Pistol 3.0": "38 1/2\"",
        "Super Stroke Plus 2.0 XL": "38 1/2\"",
        "SinkFit": "38 1/2\"",
        "Winn Excell 15\"": "38 1/2\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "38 1/2\"",
        "PXG Straight II": "38 1/2\"",
        "PXG Straight III": "38 1/2\"",
        "PXG Pistol I": "38 1/2\"",
        "PXG Pistol II": "38 1/2\"",
        "PXG Pistol III": "38 1/2\"",
        "PXG Slant 1.5": "38 1/2\"",
        "PXG Slant Pistol": "38 1/2\"",
        "PXG Slant Pistol Mid": "38 1/2\"",
        "PXG XL": "38 1/2\"",
        "Super Stroke Flatso 1.0": "38 1/2\"",
        "Super Stroke Flatso 2.0": "38 1/2\"",
        "Super Stroke Flatso 3.0": "38 1/2\"",
        "Super Stroke Fatso 5.0": "38 1/2\"",
        "Super Stroke Pistol 1.0": "38 1/2\"",
        "Super Stroke Pistol 2.0": "38 1/2\"",
        "Super Stroke Pistol 3.0": "38 1/2\"",
        "Super Stroke Plus 2.0 XL": "38 1/2\"",
        "SinkFit": "38 1/2\"",
        "Winn Excell 15\"": "38 1/2\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "39\"",
        "PXG Straight II": "39\"",
        "PXG Straight III": "39\"",
        "PXG Pistol I": "39\"",
        "PXG Pistol II": "39\"",
        "PXG Pistol III": "39\"",
        "PXG Slant 1.5": "39\"",
        "PXG Slant Pistol": "39\"",
        "PXG Slant Pistol Mid": "39\"",
        "PXG XL": "39\"",
        "Super Stroke Flatso 1.0": "39\"",
        "Super Stroke Flatso 2.0": "39\"",
        "Super Stroke Flatso 3.0": "39\"",
        "Super Stroke Fatso 5.0": "39\"",
        "Super Stroke Pistol 1.0": "39\"",
        "Super Stroke Pistol 2.0": "39\"",
        "Super Stroke Pistol 3.0": "39\"",
        "Super Stroke Plus 2.0 XL": "39\"",
        "SinkFit": "39\"",
        "Winn Excell 15\"": "39\""
      }
  };

  const ZeroHotshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": "27 1/4\"",
        "PXG Straight II": "27 1/4\"",
        "PXG Straight III": "27 1/4\"",
        "PXG Pistol I": "27 1/4\"",
        "PXG Pistol II": "27 1/4\"",
        "PXG Pistol III": "27 1/4\"",
        "PXG Slant 1.5": "27 1/4\"",
        "PXG Slant Pistol": "27 1/4\"",
        "PXG Slant Pistol Mid": "27 1/4\"",
        "PXG XL": "33 1/2\"",
        "Super Stroke Flatso 1.0": "27 1/4\"",
        "Super Stroke Flatso 2.0": "27 1/4\"",
        "Super Stroke Flatso 3.0": "27 1/4\"",
        "Super Stroke Fatso 5.0": "27 1/4\"",
        "Super Stroke Pistol 1.0": "27 1/4\"",
        "Super Stroke Pistol 2.0": "27 1/4\"",
        "Super Stroke Pistol 3.0": "27 1/4\"",
        "Super Stroke Plus 2.0 XL": "27 1/4\"",
        "SinkFit": "30 3/4\"",
        "Winn Excell 15\"": "27 1/4\""
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": "27 1/4\"",
        "PXG Straight II": "27 1/4\"",
        "PXG Straight III": "27 1/4\"",
        "PXG Pistol I": "27 1/4\"",
        "PXG Pistol II": "27 1/4\"",
        "PXG Pistol III": "27 1/4\"",
        "PXG Slant 1.5": "27 1/4\"",
        "PXG Slant Pistol": "27 1/4\"",
        "PXG Slant Pistol Mid": "27 1/4\"",
        "PXG XL": "33 1/2\"",
        "Super Stroke Flatso 1.0": "27 1/4\"",
        "Super Stroke Flatso 2.0": "27 1/4\"",
        "Super Stroke Flatso 3.0": "27 1/4\"",
        "Super Stroke Fatso 5.0": "27 1/4\"",
        "Super Stroke Pistol 1.0": "27 1/4\"",
        "Super Stroke Pistol 2.0": "27 1/4\"",
        "Super Stroke Pistol 3.0": "27 1/4\"",
        "Super Stroke Plus 2.0 XL": "27 1/4\"",
        "SinkFit": "30 3/4\"",
        "Winn Excell 15\"": "27 1/4\""
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": "29 1/4\"",
        "PXG Straight II": "29 1/4\"",
        "PXG Straight III": "29 1/4\"",
        "PXG Pistol I": "29 1/4\"",
        "PXG Pistol II": "29 1/4\"",
        "PXG Pistol III": "29 1/4\"",
        "PXG Slant 1.5": "29 1/4\"",
        "PXG Slant Pistol": "29 1/4\"",
        "PXG Slant Pistol Mid": "29 1/4\"",
        "PXG XL": "34 1/4\"",
        "Super Stroke Flatso 1.0": "29 1/4\"",
        "Super Stroke Flatso 2.0": "29 1/4\"",
        "Super Stroke Flatso 3.0": "29 1/4\"",
        "Super Stroke Fatso 5.0": "29 1/4\"",
        "Super Stroke Pistol 1.0": "29 1/4\"",
        "Super Stroke Pistol 2.0": "29 1/4\"",
        "Super Stroke Pistol 3.0": "29 1/4\"",
        "Super Stroke Plus 2.0 XL": "30 3/4\"",
        "SinkFit": "26 1/4\"",
        "Winn Excell 15\"": "29 1/4\""
      }
  };

  const ZeroLongshaftMaxList = {
      "PXG Multi-Material Long Putter Shaft - Straight - Black" : {
        "PXG Split Putter Grip": "47 1/2\""
      },
      'KBS-Putt-Straight-Chr-47"' : {
        "PXG Split Putter Grip": "47 1/2\""
      }
  };

  const ZeroLongshaftMinList = {
      "PXG Multi-Material Long Putter Shaft - Straight - Black" : {
        "PXG Split Putter Grip": "40\""
      },
      'KBS-Putt-Straight-Chr-47"' : {
        "PXG Split Putter Grip": "40\""
      }
  };

  const ArmshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": '42 1/2"',
        "PXG Straight II": '42 1/2"',
        "PXG Straight III": '42 1/2"',
        "PXG Pistol I": '42 1/2"',
        "PXG Pistol II": '42 1/2"',
        "PXG Pistol III": '42 1/2"',
        "PXG Slant 1.5": '42 1/2"',
        "PXG Slant Pistol": '42 1/2"',
        "PXG Slant Pistol Mid": '42 1/2"',
        "PXG XL": '42 1/2"',
        "Super Stroke Flatso 1.0": '42 1/2"',
        "Super Stroke Flatso 2.0": '42 1/2"',
        "Super Stroke Flatso 3.0": '42 1/2"',
        "Super Stroke Fatso 5.0": '42 1/2"',
        "Super Stroke Pistol 1.0": '42 1/2"',
        "Super Stroke Pistol 2.0": '42 1/2"',
        "Super Stroke Pistol 3.0": '42 1/2"',
        "Super Stroke Plus 2.0 XL": '42 1/2"',
        "SinkFit": '42 1/2"',
        "Winn Excell 15\"": '42 1/2"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '42 1/2"',
        "PXG Straight II": '42 1/2"',
        "PXG Straight III": '42 1/2"',
        "PXG Pistol I": '42 1/2"',
        "PXG Pistol II": '42 1/2"',
        "PXG Pistol III": '42 1/2"',
        "PXG Slant 1.5": '42 1/2"',
        "PXG Slant Pistol": '42 1/2"',
        "PXG Slant Pistol Mid": '42 1/2"',
        "PXG XL": '42 1/2"',
        "Super Stroke Flatso 1.0": '42 1/2"',
        "Super Stroke Flatso 2.0": '42 1/2"',
        "Super Stroke Flatso 3.0": '42 1/2"',
        "Super Stroke Fatso 5.0": '42 1/2"',
        "Super Stroke Pistol 1.0": '42 1/2"',
        "Super Stroke Pistol 2.0": '42 1/2"',
        "Super Stroke Pistol 3.0": '42 1/2"',
        "Super Stroke Plus 2.0 XL": '42 1/2"',
        "SinkFit": '42 1/2"',
        "Winn Excell 15\"": '42 1/2"'
      },
      "Straight Steel Chrome" : {
          "PXG Straight I": '43"',
          "PXG Straight II": '43"',
          "PXG Straight III": '43"',
          "PXG Pistol I": '43"',
          "PXG Pistol II": '43"',
          "PXG Pistol III": '43"',
          "PXG Slant 1.5": '43"',
          "PXG Slant Pistol":  '43"',
          "PXG Slant Pistol Mid":  '43"',
          "PXG XL": '43"',
          "Super Stroke Flatso 1.0": '43"',
          "Super Stroke Flatso 2.0": '43"',
          "Super Stroke Flatso 3.0": '43"',
          "Super Stroke Fatso 5.0": '43"',
          "Super Stroke Pistol 1.0": '43"',
          "Super Stroke Pistol 2.0": '43"',
          "Super Stroke Pistol 3.0": '43"',
          "Super Stroke Plus 2.0 XL": '43"',
          "SinkFit": '43"',
          "Winn Excell 15\"": '43"'
      }
  };

  const ArmshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": '31 1/2"',
        "PXG Straight II": '31 1/2"',
        "PXG Straight III": '31 1/2"',
        "PXG Pistol I": '31 1/2"',
        "PXG Pistol II": '31 1/2"',
        "PXG Pistol III": '31 1/2"',
        "PXG Slant 1.5": '31 1/2"',
        "PXG Slant Pistol": '31 1/2"',
        "PXG Slant Pistol Mid": '31 1/2"',       
        "PXG XL": '38"',
        "Super Stroke Flatso 1.0": '31 1/2"',
        "Super Stroke Flatso 2.0": '31 1/2"',
        "Super Stroke Flatso 3.0": '31 1/2"',
        "Super Stroke Fatso 5.0": '31 1/2"',
        "Super Stroke Pistol 1.0": '31 1/2"',
        "Super Stroke Pistol 2.0": '31 1/2"',
        "Super Stroke Pistol 3.0": '31 1/2"',
        "Super Stroke Plus 2.0 XL": '34"',
        "SinkFit": '29"',
        "Winn Excell 15\"": '31 1/2"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '31 3/4"',
        "PXG Straight II": '31 3/4"',
        "PXG Straight III": '31 3/4"',
        "PXG Pistol I": '31 3/4"',
        "PXG Pistol II": '31 3/4"',
        "PXG Pistol III": '31 3/4"',
        "PXG Slant 1.5": '31 3/4"',
        "PXG Slant Pistol": '31 3/4"',
        "PXG Slant Pistol Mid": '31 3/4"',
        "PXG XL": '38 1/4"',
        "Super Stroke Flatso 1.0": '31 3/4"',
        "Super Stroke Flatso 2.0": '31 3/4"',
        "Super Stroke Flatso 3.0": '31 3/4"',
        "Super Stroke Fatso 5.0": '31 3/4"',
        "Super Stroke Pistol 1.0": '31 3/4"',
        "Super Stroke Pistol 2.0": '31 3/4"',
        "Super Stroke Pistol 3.0": '31 3/4"',
        "Super Stroke Plus 2.0 XL": '34 1/4"',
        "SinkFit": '29"',
        "Winn Excell 15\"": '31 3/4"'
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": '36"',
        "PXG Straight II": '36"',
        "PXG Straight III": '36"',
        "PXG Pistol I": '36"',
        "PXG Pistol II": '36"',
        "PXG Pistol III": '36"',
        "PXG Slant 1.5": '36"',
        "PXG Slant Pistol": '36"',
        "PXG Slant Pistol Mid": '36"',
        "PXG XL": '40 1/4"',
        "Super Stroke Flatso 1.0": '36"',
        "Super Stroke Flatso 2.0": '36"',
        "Super Stroke Flatso 3.0": '36"',
        "Super Stroke Fatso 5.0": '36"',
        "Super Stroke Pistol 1.0": '36"',
        "Super Stroke Pistol 2.0": '36"',
        "Super Stroke Pistol 3.0": '36"',
        "Super Stroke Plus 2.0 XL": '36"',
        "SinkFit": '28"',
        "Winn Excell 15\"": '36"'
      }
  };

  const TourshaftMaxList = {
      "M16 Straight Black" : {
        "PXG Straight I": '40 1/4"',
        "PXG Straight II": '40 1/4"',
        "PXG Straight III": '40 1/4"',
        "PXG Pistol I": '40 1/4"',
        "PXG Pistol II": '40 1/4"',
        "PXG Pistol III": '40 1/4"',
        "PXG Slant 1.5": '40 1/4"',
        "PXG Slant Pistol":'40 1/4"',
        "PXG Slant Pistol Mid": '40 1/4"',
        "PXG XL": '40 1/4"',
        "Super Stroke Flatso 1.0": '40 1/4"',
        "Super Stroke Flatso 2.0": '40 1/4"',
        "Super Stroke Flatso 3.0": '40 1/4"',
        "Super Stroke Fatso 5.0": '40 1/4"',
        "Super Stroke Pistol 1.0": '40 1/4"',
        "Super Stroke Pistol 2.0": '40 1/4"',
        "Super Stroke Pistol 3.0": '40 1/4"',
        "Super Stroke Plus 2.0 XL": '40 1/4"',
        "SinkFit": '40 1/4"',
        "Winn Excell 15\"": '40 1/4"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '40 1/4"',
        "PXG Straight II": '40 1/4"',
        "PXG Straight III": '40 1/4"',
        "PXG Pistol I": '40 1/4"',
        "PXG Pistol II": '40 1/4"',
        "PXG Pistol III": '40 1/4"',
        "PXG Slant 1.5": '40 1/4"',
        "PXG Slant Pistol":'40 1/4"',
        "PXG Slant Pistol Mid": '40 1/4"',
        "PXG XL": '40 1/4"',
        "Super Stroke Flatso 1.0": '40 1/4"',
        "Super Stroke Flatso 2.0": '40 1/4"',
        "Super Stroke Flatso 3.0": '40 1/4"',
        "Super Stroke Fatso 5.0": '40 1/4"',
        "Super Stroke Pistol 1.0": '40 1/4"',
        "Super Stroke Pistol 2.0": '40 1/4"',
        "Super Stroke Pistol 3.0": '40 1/4"',
        "Super Stroke Plus 2.0 XL": '40 1/4"',
        "SinkFit": '40 1/4"',
        "Winn Excell 15\"": '40 1/4"'
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": '40 3/4"',
        "PXG Straight II": '40 3/4"',
        "PXG Straight III": '40 3/4"',
        "PXG Pistol I": '40 3/4"',
        "PXG Pistol II": '40 3/4"',
        "PXG Pistol III": '40 3/4"',
        "PXG Slant 1.5": '40 3/4"',
        "PXG Slant Pistol": '40 3/4"',
        "PXG Slant Pistol Mid": '40 3/4"',
        "PXG XL": '40 3/4"',
        "Super Stroke Flatso 1.0": '40 3/4"',
        "Super Stroke Flatso 2.0": '40 3/4"',
        "Super Stroke Flatso 3.0": '40 3/4"',
        "Super Stroke Fatso 5.0": '40 3/4"',
        "Super Stroke Pistol 1.0": '40 3/4"',
        "Super Stroke Pistol 2.0": '40 3/4"',
        "Super Stroke Pistol 3.0": '40 3/4"',
        "Super Stroke Plus 2.0 XL": '40 3/4"',
        "SinkFit": '40 3/4"',
        "Winn Excell 15\"": '40 3/4"'
      }
  };

  const TourshaftMinList = {
      "M16 Straight Black" : {
        "PXG Straight I": '29 1/4"',
        "PXG Straight II": '29 1/4"',
        "PXG Straight III": '29 1/4"',
        "PXG Pistol I": '29 1/4"',
        "PXG Pistol II": '29 1/4"',
        "PXG Pistol III": '29 1/4"',
        "PXG Slant 1.5": '29 1/4"',
        "PXG Slant Pistol": '29 1/4"',
        "PXG Slant Pistol Mid": '29 1/4"',
        "PXG XL": '35 3/4"',
        "Super Stroke Flatso 1.0": '29 1/4"',
        "Super Stroke Flatso 2.0": '29 1/4"',
        "Super Stroke Flatso 3.0": '29 1/4"',
        "Super Stroke Fatso 5.0": '29 1/4"',
        "Super Stroke Pistol 1.0": '29 1/4"',
        "Super Stroke Pistol 2.0": '29 1/4"',
        "Super Stroke Pistol 3.0": '29 1/4"',
        "Super Stroke Plus 2.0 XL": '31 3/4"',
        "SinkFit": '26 1/2"',
        "Winn Excell 15\"": '29 1/4"'
      },
      "M16 Straight Chrome" : {
        "PXG Straight I": '29 1/2"',
        "PXG Straight II": '29 1/2"',
        "PXG Straight III": '29 1/2"',
        "PXG Pistol I": '29 1/2"',
        "PXG Pistol II": '29 1/2"',
        "PXG Pistol III": '29 1/2"',
        "PXG Slant 1.5": '29 1/2"',
        "PXG Slant Pistol": '29 1/2"',
        "PXG Slant Pistol Mid": '29 1/2"',
        "PXG XL": '36"',
        "Super Stroke Flatso 1.0": '29 1/2"',
        "Super Stroke Flatso 2.0": '29 1/2"',
        "Super Stroke Flatso 3.0": '29 1/2"',
        "Super Stroke Fatso 5.0": '29 1/2"',
        "Super Stroke Pistol 1.0": '29 1/2"',
        "Super Stroke Pistol 2.0": '29 1/2"',
        "Super Stroke Pistol 3.0": '29 1/2"',
        "Super Stroke Plus 2.0 XL": '32"',
        "SinkFit": '27"',
        "Winn Excell 15\"": '29 1/2"'
      },
      "Straight Steel Chrome" : {
        "PXG Straight I": '31 3/4"',
        "PXG Straight II": '31 3/4"',
        "PXG Straight III": '31 3/4"',
        "PXG Pistol I": '31 3/4"',
        "PXG Pistol II": '31 3/4"',
        "PXG Pistol III": '31 3/4"',
        "PXG Slant 1.5": '31 3/4"',
        "PXG Slant Pistol": '31 3/4"',
        "PXG Slant Pistol Mid": '31 3/4"',
        "PXG XL": '38"',
        "Super Stroke Flatso 1.0": '31 3/4"',
        "Super Stroke Flatso 2.0": '31 3/4"',
        "Super Stroke Flatso 3.0": '31 3/4"',
        "Super Stroke Fatso 5.0": '31 3/4"',
        "Super Stroke Pistol 1.0": '31 3/4"',
        "Super Stroke Pistol 2.0": '31 3/4"',
        "Super Stroke Pistol 3.0": '31 3/4"',
        "Super Stroke Plus 2.0 XL": '33 3/4"',
        "SinkFit": '27"',
        "Winn Excell 15\"": '31 3/4"'
      }
  };


  const HOSEL_TYPES = {
    Plumbers: {
        name:"Plumbers",
        maxList: PlumbershaftMaxList,
        minList: PlumbershaftMinList
    },
      Heel: {
        name:"Heel (H)",
        maxList: HeelhaftMaxList,
        minList: HeelhaftMinList
    },
      Double: {
        name:"Double Bend",
        maxList: DoubleshaftMaxList,
        minList: DoubleshaftMinList
    },
      Arm: {
        name:"Arm Lock",
        maxList: ArmshaftMaxList,
        minList: ArmshaftMinList
    },
      Tour: {
        name:"Tour Series",
        maxList: TourshaftMaxList,
        minList: TourshaftMinList
    },
      ZeroAllan: {
        name:"Zero Torque (Allan)",
        maxList: ZeroAllanshaftMaxList,
        minList: ZeroAllanshaftMinList
    },
      ZeroMustang: {
        name:"Zero Torque (Mustang)",
        maxList: ZeroMustangshaftMaxList,
        minList: ZeroMustangshaftMinList
    },
      ZeroHellcat: {
        name:"Zero Torque (Hellcat)",
        maxList: ZeroHellcatshaftMaxList,
        minList: ZeroHellcatshaftMinList
    },
      ZeroBat: {
        name:"Zero Torque (Bat Attack)",
        maxList: ZeroBatshaftMaxList,
        minList: ZeroBatshaftMinList
    },
      ZeroHot: {
        name:"Zero Torque (Hot Rod)",
        maxList: ZeroHotshaftMaxList,
        minList: ZeroHotshaftMinList
    },
      ZeroLong: {
        name:"Zero Torque (Long Allan)",
        maxList: ZeroLongshaftMaxList,
        minList: ZeroLongshaftMinList
    },
  }

  // --- Estado del formulario ---
  const [selectedHosel, setSelectedHosel] = useState("Plumbers");
  const [selectedShaft, setSelectedShaft] = useState("M16 Straight Black");
  const [selectedGrip, setSelectedGrip] = useState("PXG Straight I");

  // --- Calcular resultados ---
  const results = useMemo(() => {
    const { maxList, minList } = HOSEL_TYPES[selectedHosel] || {};
    
    const shaftMaxData = maxList?.[selectedShaft] || {};
    const shaftMinData = minList?.[selectedShaft] || {};
    
    const shaftLengthMax = shaftMaxData[selectedGrip] ?? "Not available";
    const shaftLengthMin = shaftMinData[selectedGrip] ?? "Not available";

    return {
      result_shaft_Max: shaftLengthMax,
      result_shaft_Min: shaftLengthMin,
    };
  }, [selectedHosel, selectedShaft, selectedGrip]); 

    // --- Opciones disponibles ---
  const { maxList } = HOSEL_TYPES[selectedHosel] || {};
  const availableShafts = Object.keys(maxList || {});
  const availableGrips = selectedShaft ? Object.keys(maxList?.[selectedShaft] || {}) : [];

  // Función para verificar si un grip existe en la lista actual
  const gripExists = (grip, shaft, hoselType) => {
  const { maxList } = HOSEL_TYPES[hoselType] || {};
  const shaftData = maxList?.[shaft] || {};
  return Object.keys(shaftData).includes(grip);
};
  
  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Putter Length Calculator</h1>
        <p style={styles.subtitle}>All lengths assume standard tipping</p>

        <div style={styles.calculator}>
          {/* Columna izquierda - formulario */}
          <div style={styles.leftCol}>
            {/* Selector de Hosel */}
            <div style={styles.formGroup}>
              <label>Hosel Type</label>
              <select 
                style={styles.selectcontainer} 
                value={selectedHosel} 
                onChange={(e) => {
                  const newHosel = e.target.value;
                  setSelectedHosel(newHosel);
                  
                  const { maxList } = HOSEL_TYPES[newHosel] || {};
                  const newAvailableShafts = Object.keys(maxList || {});
                  const newShaft = newAvailableShafts[0] || "";
                  
                  setSelectedShaft(newShaft);
                  
                  // Mantener "PXG Straight I" si existe, sino el primer grip disponible
                  if (gripExists("PXG Straight I", newShaft, newHosel)) {
                    setSelectedGrip("PXG Straight I");
                  } else {
                    const availableGrips = Object.keys(maxList?.[newShaft] || {});
                    setSelectedGrip(availableGrips[0] || "");
                  }
                }}
              >
                {Object.entries(HOSEL_TYPES).map(([key, hosel]) => (
                  <option key={key} value={key}>
                    {hosel.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector de Shaft */}
            <div style={styles.formGroup}>
              <label>Shaft</label>
              <select 
                style={styles.selectcontainer} 
                value={selectedShaft} 
                onChange={(e) => {
                  const newShaft = e.target.value;
                  setSelectedShaft(newShaft);
                  
                  // Mantener "PXG Straight I" si existe, sino el primer grip disponible
                  if (gripExists("PXG Straight I", newShaft, selectedHosel)) {
                    setSelectedGrip("PXG Straight I");
                  } else {
                    const availableGrips = Object.keys(maxList?.[newShaft] || {});
                    setSelectedGrip(availableGrips[0] || "");
                  }
                }}
              >
                {availableShafts.map((shaft) => (
                  <option key={shaft} value={shaft}>{shaft}</option>
                ))}
              </select>
            </div>

            {/* Selector de Grip */}
            <div style={styles.formGroup}>
              <label>Grip</label>
              <select 
                style={styles.selectcontainer} 
                value={selectedGrip} 
                onChange={(e) => setSelectedGrip(e.target.value)}
                disabled={!selectedShaft}
              >
                {availableGrips.map((grip) => (
                  <option key={grip} value={grip}>{grip}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Columna medio - resultados */}
          <div style={styles.midCol}>

          </div>
          {/* Columna derecha - resultados */}
          <div style={styles.rightCol}>
            <div style={styles.resultRow}>
              <span>Maximum Length (Raw/Uncut)</span>
              <span style={styles.resultBox}>{results.result_shaft_Max}</span>
            </div>
            <div style={styles.resultRow}>
              <span>Minimum Length</span>
              <span style={styles.resultBox}>{results.result_shaft_Min}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
      containerWrapper: {
        display: "flex",
        justifyContent: "center", // Centrado horizontal
        alignItems: "center",     // Centrado vertical (opcional)
        width: "100%",
        minHeight: "100vh",       // Ocupa toda la altura visible
        marginTop: -40,
        boxSizing: "border-box"
    },
    container: { 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "2.5vw", // Usa % del ancho de la ventana (viewport width)
      maxWidth: "1200px", // Límite máximo para pantallas muy grandes
      margin: "0 auto",
      fontSize: "clamp(10px, 1.1vw, 18px)", // Escala entre 14px y 18px según el ancho
    },
    title: { 
      marginTop: "30px", 
      marginBottom: "-8px",   
      fontSize: "clamp(20px, 1.5vw, 30px)", // Escala de 24px a 32px
      fontWeight: "bold", 
    },
    subtitle: { 
      fontSize: "clamp(10px, 1.15vw, 25px)", 
      color: "#555", 
     },
    calculator: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2vw", // Centra el contenedor calculator
      gap: "3vw",
      width: "100%", // Asegura que ocupe todo el ancho disponible
    },
    leftCol: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "min(30vw, 350px)",
      textAlign: "left",
    },
    rightCol: { 
      display: "flex", 
      flexDirection: "column",
      gap: "19px",
      width: "min(30vw, 300px)",
      alignItems: "center", // Centra los elementos hijos horizontalmente
    },
    midCol: { 
      display: "flex", 
      flexDirection: "column",
      marginTop: "1.6vw", 
      gap: "35px",
      marginRight: "13vw",
      width: "min(30vw, 30px)",
      textAlign: "right",// Centra los elementos hijos horizontalmente
    },
    resultRow: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #aaaaaaff",
      background: "#e0e0e0",
      padding: "16px",
      width: "min(30vw, 450px)"
    },
    resultBox: {
      background: "#63ff1bff",
      padding: ".20vw .25vw",
      fontWeight: "bold",
      fontSize: "clamp(14px, 1.5vw, 17px)"
    },
    selectcontainer :{
      width: "min(30vw, 350px)",
      fontSize: "clamp(13px, 1.05vw, 17px)"
    }
};