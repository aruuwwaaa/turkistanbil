import { createRouter, createWebHistory } from "vue-router";

/* Pages */
import Home from "../pages/Home.vue";
import login from "../pages/login.vue";
import Contact from "../pages/Contact.vue";
import AcademCalendar from "../pages/AcademCalendar.vue";
import ComandVue from "@/components/Comand.vue";
import ConnectionTeachers from "../pages/ConnectionTeachers.vue";
import Dormitory from "../pages/Dormitory.vue";
import Edupage from "../pages/BilimClass";
import Facts from "../pages/Facts.vue";
import History from "../pages/History.vue";
import ParentComit from "../pages/ParentComit.vue";
import Profession from "../pages/Profession.vue";
import Sporthall from "../pages/Sporthall.vue";
import StudentLife from "../pages/StudentLife.vue";
import SupplyDocuments from "../pages/SupplyDocuments.vue";
import Translate from "../pages/Translate.vue";
import StudentHouse from "../pages/StudentHouse.vue";
import PageNotFound from "../pages/PageNotFound.vue";
import Admin from "../pages/admin.vue";
import UpdateNews from "../pages/UpdateNews.vue";
import corpusA from "../pages/corpusA.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/AdminPanelToAddNewsToChangeNewsToUpdateNews",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true, hideFooter: true },
  },

  {
    path: "/adminPanelNewsToUpdateNews/:id",
    name: "UpdateNews",
    component: UpdateNews,
    meta: { requiresAuth: true, hideFooter: true },
    props: true,
  },
  {
    path: "/dormitoryrools",
    component: StudentHouse,
  },
  {
    path: "/corpusA",
    component: corpusA,
  },

  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/academcalendar",
    component: AcademCalendar,
  },
  {
    path: "/parentcomit",
    component: ParentComit,
  },
  {
    path: "/comand",
    component: ComandVue,
  },
  {
    path: "/connectionteachers",
    component: ConnectionTeachers,
  },
  {
    path: "/dormitory",
    component: Dormitory,
  },
  {
    path: "/edupage",
    component: Edupage,
  },
  {
    path: "/facts",
    component: Facts,
  },

  {
    path: "/history",
    component: History,
  },
  {
    path: "/profession",
    component: Profession,
  },
  {
    path: "/sporthall",
    component: Sporthall,
  },

  {
    path: "/studentlife",
    component: StudentLife,
  },
  {
    path: "/supplydocuments",
    component: SupplyDocuments,
  },
  {
    path: "/translate",
    component: Translate,
  },
  {
    path: "/loginToTheAdminPanel",
    component: login,
    meta: { hideFooter: true },
  },
  {
    path: "/:pathMatch(.*)*", // catch all 404 - make sure this is at the end
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!sessionStorage.getItem("accessToken")) {
      // No access token found, redirect to login
      next({ path: "/loginToTheAdminPanel" });
    } else {
      next(); // proceed to the route
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
