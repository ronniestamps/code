<?php
/**
 *      _____  ______  _____ _______ __       _            _____ _____ 
 *     |  __ \|  ____|/ ____|__   __/ _|     | |     /\   |  __ \_   _|
 *     | |__) | |__  | (___    | | | |_ _   _| |    /  \  | |__) || |  
 *     |  _  /|  __|  \___ \   | | |  _| | | | |   / /\ \ |  ___/ | |  
 *     | | \ \| |____ ____) |  | | | | | |_| | |  / ____ \| |    _| |_ 
 *     |_|  \_\______|_____/   |_| |_|  \__,_|_| /_/    \_\_|   |_____|
 *                                                                     
 *
 * 		Client: Califronia Department of Corrections and Rehabilitation (CDCR)
 *		Project: Improved UX dashboard for Absorb Learning Management System.
 *		Description: .
 *
 *		Working in tandem with Absorb Infuse API development.
 *
 *		Absorb Infuse WordPress plugin.
 *		Plugin name: Absorb Infuse
 *		Description: Custom Absorb Infuse API integration plugin using CDCR Microsoft Azure as Identity Provider for SSO.
 *                                                              
 */

 function mandatory_courses($token) {
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => get_field('api_base_url', 'options') . '/my-mandatory-courses?showCompleted=true', // must include completed courses for UX accuracy.
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
      'x-api-key: ' . get_field('api_key', 'options') . '',
      'Authorization: Bearer ' . $token . '',
    ),
  ));

  $response = curl_exec($curl);

  $data = json_decode($response, true);

  $manCourses = new ManCourses();

  if (is_array($data) || is_object($data)) {
    foreach ($data as $key => $value) $manCourses->{$key} = $value;
  }

  curl_close($curl);
  $_SESSION["manCourses"] = $manCourses;
  $_SESSION["data"] = $data;

  /** Mandatory Courses Progress **/
  $progress = 0;

  if (is_array($manCourses) || is_object($manCourses)) {
    foreach ($manCourses->_embedded["courses"] as $manCourse) {
      $progress += $manCourse["progress"];
    }
  }

  $totalProgress = round($progress / $manCourses->totalItems);

  $enrollmentStatus = filter_by('enrollmentStatus', $data['_embedded']['courses'], 'Complete');

  $_SESSION["progress"] = $totalProgress;
  $_SESSION["totalMandatory"] = $manCourses->totalItems;
  $_SESSION["totalCompleted"] = $manCourses->totalItems;
  $_SESSION["ratio"] = count($enrollmentStatus).'/'.$manCourses->totalItems;  
}