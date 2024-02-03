(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/login.guard */ 3649);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 27926)).then(m => m.TabsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 35129)).then(m => m.HomePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 59029)).then(m => m.ProfilePageModule)
    },
    {
        path: 'introduction-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_introduction-page_introduction-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/introduction-page/introduction-page.module */ 90987)).then(m => m.IntroductionPagePageModule)
    },
    {
        path: 'welcome-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome-page_welcome-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome-page/welcome-page.module */ 57464)).then(m => m.WelcomePagePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginPageModule),
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 69751)).then(m => m.RegisterPageModule)
    },
    {
        path: 'activity-tracker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_activity-tracker_activity-tracker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/activity-tracker/activity-tracker.module */ 59037)).then(m => m.ActivityTrackerPageModule)
    },
    {
        path: 'add-alarm',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_add-alarm_add-alarm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-alarm/add-alarm.module */ 94256)).then(m => m.AddAlarmPageModule)
    },
    {
        path: 'workout-schedule',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_workout-schedule_workout-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workout-schedule/workout-schedule.module */ 42965)).then(m => m.WorkoutSchedulePageModule)
    },
    {
        path: 'sleep-schedule',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_sleep-schedule_sleep-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sleep-schedule/sleep-schedule.module */ 29414)).then(m => m.SleepSchedulePageModule)
    },
    {
        path: 'your-goal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_your-goal_your-goal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/your-goal/your-goal.module */ 81448)).then(m => m.YourGoalPageModule)
    },
    {
        path: 'sleep-tracker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_pages_sleep-tracker_sleep-tracker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sleep-tracker/sleep-tracker.module */ 97993)).then(m => m.SleepTrackerPageModule)
    },
    {
        path: 'progress-photos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_progress-photos_progress-photos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/progress-photos/progress-photos.module */ 97921)).then(m => m.ProgressPhotosPageModule)
    },
    {
        path: 'workout-tracker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_workout-tracker_workout-tracker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workout-tracker/workout-tracker.module */ 64357)).then(m => m.WorkoutTrackerPageModule)
    },
    {
        path: 'meal-schedule',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_meal-schedule_meal-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/meal-schedule/meal-schedule.module */ 68465)).then(m => m.MealSchedulePageModule)
    },
    {
        path: 'workout-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_workout-details_workout-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workout-details/workout-details.module */ 43985)).then(m => m.WorkoutDetailsPageModule)
    },
    {
        path: 'fullbody-workout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fullbody-workout_fullbody-workout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fullbody-workout/fullbody-workout.module */ 41310)).then(m => m.FullbodyWorkoutPageModule)
    },
    {
        path: 'complete-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_complete-profile_complete-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/complete-profile/complete-profile.module */ 12129)).then(m => m.CompleteProfilePageModule)
    },
    {
        path: 'comparison',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_comparison_comparison_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/comparison/comparison.module */ 53402)).then(m => m.ComparisonPageModule)
    },
    {
        path: 'breakfast',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_breakfast_breakfast_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/breakfast/breakfast.module */ 7837)).then(m => m.BreakfastPageModule)
    },
    {
        path: 'success',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_success_success_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success/success.module */ 36073)).then(m => m.SuccessPageModule)
    },
    {
        path: 'add-schedule',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-schedule_add-schedule_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-schedule/add-schedule.module */ 89189)).then(m => m.AddSchedulePageModule)
    },
    {
        path: 'meal-planner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_meal-planner_meal-planner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/meal-planner/meal-planner.module */ 15614)).then(m => m.MealPlannerPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 51303)).then(m => m.NotificationPageModule)
    },
    {
        path: 'recipes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recipes_recipes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recipes/recipes.module */ 66042)).then(m => m.RecipesPageModule)
    },
    {
        path: 'result',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_pages_result_result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/result/result.module */ 9937)).then(m => m.ResultPageModule)
    },
    {
        path: 'other-navigationpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other-navigationpage_other-navigationpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other-navigationpage/other-navigationpage.module */ 67714)).then(m => m.OtherNavigationpagePageModule)
    },
    {
        path: 'anamnese',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_anamnese_anamnese_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/anamnese/anamnese.module */ 48803)).then(m => m.AnamnesePageModule)
    },
    {
        path: 'altura',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_altura_altura_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/altura/altura.module */ 9239)).then(m => m.AlturaPageModule)
    },
    {
        path: 'idade',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_idade_idade_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/idade/idade.module */ 45919)).then(m => m.IdadePageModule)
    },
    {
        path: 'objetivo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_objetivo_objetivo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/objetivo/objetivo.module */ 877)).then(m => m.ObjetivoPageModule)
    },
    {
        path: 'exercicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exercicio_exercicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exercicio/exercicio.module */ 27438)).then(m => m.ExercicioPageModule)
    },
    {
        path: 'saude',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_saude_saude_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/saude/saude.module */ 47308)).then(m => m.SaudePageModule)
    },
    {
        path: 'resultado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_resultado_resultado_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resultado/resultado.module */ 95323)).then(m => m.ResultadoPageModule)
    },
    {
        path: 'dieta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dieta_dieta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dieta/dieta.module */ 55737)).then(m => m.DietaPageModule)
    },
    {
        path: 'diet-dinner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_diet-dinner_diet-dinner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diet-dinner/diet-dinner.module */ 17467)).then(m => m.DietDinnerPageModule)
    },
    {
        path: 'diet-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_diet-details_diet-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diet-details/diet-details.module */ 41457)).then(m => m.DietDetailsPageModule)
    },
    {
        path: 'atualiza-peso',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_atualiza-peso_atualiza-peso_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/atualiza-peso/atualiza-peso.module */ 51676)).then(m => m.AtualizaPesoPageModule)
    },
    {
        path: 'menu-diet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_menu-diet_menu-diet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu-diet/menu-diet.module */ 14968)).then(m => m.MenuDietPageModule)
    },
    {
        path: 'week-diet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_week-diet_week-diet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/week-diet/week-diet.module */ 94367)).then(m => m.WeekDietPageModule)
    },
    {
        path: 'snack-week',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_snack-week_snack-week_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/snack-week/snack-week.module */ 8293)).then(m => m.SnackWeekPageModule)
    },
    {
        path: 'diet-pre-training',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_diet-pre-training_diet-pre-training_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diet-pre-training/diet-pre-training.module */ 88098)).then(m => m.DietPreTrainingPageModule)
    },
    {
        path: 'diet-breakfast',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_diet-breakfast_diet-breakfast_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diet-breakfast/diet-breakfast.module */ 233)).then(m => m.DietBreakfastPageModule)
    },
    {
        path: 'diet-afternoon-snack',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_diet-afternoon-snack_diet-afternoon-snack_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/diet-afternoon-snack/diet-afternoon-snack.module */ 62296)).then(m => m.DietAfternoonSnackPageModule)
    },
    {
        path: 'exams',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exams_exams_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams/exams.module */ 31578)).then(m => m.ExamsPageModule)
    },
    {
        path: 'exams2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exams2_exams2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams2/exams2.module */ 82856)).then(m => m.Exams2PageModule)
    },
    {
        path: 'exams3',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_exams3_exams3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams3/exams3.module */ 19327)).then(m => m.Exams3PageModule)
    },
    {
        path: 'exams4',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_exams4_exams4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams4/exams4.module */ 40548)).then(m => m.Exams4PageModule)
    },
    {
        path: 'exams5',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_exams5_exams5_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams5/exams5.module */ 41273)).then(m => m.Exams5PageModule)
    },
    {
        path: 'exams6',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_exams6_exams6_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams6/exams6.module */ 47537)).then(m => m.Exams6PageModule)
    },
    {
        path: 'menu-exames',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_menu-exames_menu-exames_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu-exames/menu-exames.module */ 94143)).then(m => m.MenuExamesPageModule)
    },
    {
        path: 'exams7',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_exams7_exams7_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exams7/exams7.module */ 61799)).then(m => m.Exams7PageModule)
    },
    {
        path: 'menu-exercicios',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_menu-exercicios_menu-exercicios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu-exercicios/menu-exercicios.module */ 76289)).then(m => m.MenuExerciciosPageModule)
    },
    {
        path: 'week-exercicios',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_week-exercicios_week-exercicios_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/week-exercicios/week-exercicios.module */ 81782)).then(m => m.WeekExerciciosPageModule)
    },
    {
        path: 'day-exercicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_day-exercicio_day-exercicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-exercicio/day-exercicio.module */ 9152)).then(m => m.DayExercicioPageModule)
    },
    {
        path: 'details-exercicios',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details-exercicios_details-exercicios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details-exercicios/details-exercicios.module */ 55901)).then(m => m.DetailsExerciciosPageModule)
    },
    {
        path: 'tempo-treino',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tempo-treino_tempo-treino_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tempo-treino/tempo-treino.module */ 3967)).then(m => m.TempoTreinoPageModule)
    },
    {
        path: 'hidratar-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_hidratar-form_hidratar-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hidratar-form/hidratar-form.module */ 87979)).then(m => m.HidratarFormPageModule)
    },
    {
        path: 'day-exercicio-segunda',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-exercicio-segunda_day-exercicio-segunda_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-exercicio-segunda/day-exercicio-segunda.module */ 89611)).then(m => m.DayExercicioSegundaPageModule)
    },
    {
        path: 'day-exercicio-sexta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-exercicio-sexta_day-exercicio-sexta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-exercicio-sexta/day-exercicio-sexta.module */ 12642)).then(m => m.DayExercicioSextaPageModule)
    },
    {
        path: 'day-details-one',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-one_day-details-one_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-one/day-details-one.module */ 78018)).then(m => m.DayDetailsOnePageModule)
    },
    {
        path: 'day-details-dois',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-dois_day-details-dois_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-dois/day-details-dois.module */ 90612)).then(m => m.DayDetailsDoisPageModule)
    },
    {
        path: 'day-details-tres',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-tres_day-details-tres_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-tres/day-details-tres.module */ 43154)).then(m => m.DayDetailsTresPageModule)
    },
    {
        path: 'day-details-quatro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-quatro_day-details-quatro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-quatro/day-details-quatro.module */ 50656)).then(m => m.DayDetailsQuatroPageModule)
    },
    {
        path: 'day-details-cinco',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-cinco_day-details-cinco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-cinco/day-details-cinco.module */ 65565)).then(m => m.DayDetailsCincoPageModule)
    },
    {
        path: 'day-details-seis',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-seis_day-details-seis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-seis/day-details-seis.module */ 54758)).then(m => m.DayDetailsSeisPageModule)
    },
    {
        path: 'day-details-sete',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-sete_day-details-sete_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-sete/day-details-sete.module */ 9413)).then(m => m.DayDetailsSetePageModule)
    },
    {
        path: 'day-details-oito',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-oito_day-details-oito_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-oito/day-details-oito.module */ 64730)).then(m => m.DayDetailsOitoPageModule)
    },
    {
        path: 'day-details-nove',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-nove_day-details-nove_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-nove/day-details-nove.module */ 73216)).then(m => m.DayDetailsNovePageModule)
    },
    {
        path: 'day-details-dex',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-dex_day-details-dex_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-dex/day-details-dex.module */ 52535)).then(m => m.DayDetailsDexPageModule)
    },
    {
        path: 'day-details-onze',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-onze_day-details-onze_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-onze/day-details-onze.module */ 62723)).then(m => m.DayDetailsOnzePageModule)
    },
    {
        path: 'day-details-doze',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_day-details-doze_day-details-doze_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/day-details-doze/day-details-doze.module */ 94505)).then(m => m.DayDetailsDozePageModule)
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 22302)).then(m => m.PagesPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);



/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/

let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_user_Documents_B2B_Health_b2b_health_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/token.interceptor */ 34212);
/* harmony import */ var _pipes_hora_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/hora.pipe */ 63013);

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pipes_hora_pipe__WEBPACK_IMPORTED_MODULE_3__.HoraPipe],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_2__.TokenInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3649:
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 36636);




let LoginGuard = class LoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.check()) {
            this.router.navigate(['/anamnese']);
        }
        return true;
    }
};
LoginGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 34212:
/*!**********************************************!*\
  !*** ./src/app/helpers/token.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);






let TokenInterceptor = class TokenInterceptor {
    constructor(router) {
        this.router = router;
    }
    handleAuthError(err) {
        if (err.status === 401 && this.router.url != '/login') {
            localStorage.clear();
            this.router.navigateByUrl('/login');
        }
        if (err.status === 422) {
            let message = '';
            const errors = err.error.errors;
            Object.keys(errors).forEach(k => message += errors[k] + '\n');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(message);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        const requestUrl = request.url.split('/');
        const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local.split('/');
        if (token && (requestUrl[2] === apiUrl[2])) {
            const newRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(newRequest);
        }
        else {
            return next.handle(request)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleAuthError(err)));
        }
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TokenInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], TokenInterceptor);



/***/ }),

/***/ 63013:
/*!************************************!*\
  !*** ./src/app/pipes/hora.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoraPipe": () => (/* binding */ HoraPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let HoraPipe = class HoraPipe {
    transform(value) {
        const date = new Date(value);
        const hora = date.getHours();
        const minuto = date.getMinutes();
        const segundo = date.getSeconds();
        return `${hora}:${minuto}:${segundo}`;
    }
};
HoraPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'hora'
    })
], HoraPipe);



/***/ }),

/***/ 36636:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    check() {
        return localStorage.getItem('token') ? true : false;
    }
    checkAnamneseUser() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/usuarios/check-anamnese`);
    }
    login(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/auth/login`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(users => {
            localStorage.setItem('token', users.access_token);
            localStorage.setItem('user_id', users.id);
            return users;
        }));
    }
    register(register) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/auth/register`, register);
    }
    profile() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_local}/auth/profile`);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    api_local: 'https://api.b2bhealth.com.br/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);


// if (environment.production) {
//   enableProdMode();
// }
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n -->\n<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuKi8iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map