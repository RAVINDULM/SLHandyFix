import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div class="row" >
        <a target="_blank" rel="noopener noreferrer">
          SLHandyFix
        </a>
        <span className="ms-1">&copy; 2022 All rights Reserved.</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
