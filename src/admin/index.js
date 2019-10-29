import React from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as OverviewIcon } from "assets/images/seller/overview-dark.svg";
import { ReactComponent as OrderIcon } from "assets/images/seller/orders-dark.svg";
import { ReactComponent as ProductIcon } from "assets/images/seller/products-dark.svg";
import { ReactComponent as PaymentIcon } from "assets/images/seller/payment-dark.svg";
import { ReactComponent as PromotionIcon } from "assets/images/seller/promotion-dark.svg";
import { ReactComponent as SettingIcon } from "assets/images/seller/setting-dark.svg";
import "./admin-style.scss";

export default function SellerWeb() {
  return (
    <div className="seller-web">
      <aside className="sidebar-left">
        <div className="sidebar-left__brand">
          <div className="sidebar-left__brand-logo">
            <a href="#/">
              <Logo />
            </a>
          </div>
        </div>
        <div className="sidebar-left__menu-wrapper">
          <nav className="sidebar-left__menu">
            <ul>
              <li className="sidebar-left__menu-item active">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <OverviewIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Overview</span>
                </a>
              </li>
              <li className="sidebar-left__menu-item">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <OrderIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Orders</span>
                </a>
              </li>
              <li className="sidebar-left__menu-item">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <ProductIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Products</span>
                </a>
              </li>
              <li className="sidebar-left__menu-item">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <PaymentIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Payments</span>
                </a>
              </li>
              <li className="sidebar-left__menu-item">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <PromotionIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Promotions</span>
                </a>
              </li>
              <li className="sidebar-left__menu-item">
                <a href="#/" className="sidebar-left__menu-item__link">
                  <SettingIcon className="sidebar-left__menu-item__link-icon" />
                  <span className="sidebar-left__menu-item__link-name">Setting</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          consectetur purus nec volutpat. Donec vel libero nec est commodo
          facilisis vel et nisl. Praesent porta sed eros eu porta. Cras dolor
          nulla, ullamcorper et tincidunt quis, porta ut tellus. Maecenas cursus
          libero sed accumsan luctus. Integer sed consequat ante. Morbi sit amet
          lectus tempor elit tempor cursus ut sed enim. Donec placerat bibendum
          volutpat.
        </p>
        <p>
          Nunc sit amet eleifend sapien, sed tincidunt neque. Donec id sapien et
          nunc scelerisque iaculis dignissim nec mauris. Fusce at pretium nulla.
          Maecenas vel rutrum tellus, a viverra nunc. Aenean at arcu vitae dui
          faucibus dapibus. Vivamus hendrerit blandit mollis. Aenean sit amet
          lectus a metus faucibus condimentum. Proin vel eros ut elit pharetra
          lacinia vitae eu orci. Etiam massa massa, aliquam at pulvinar ut,
          porttitor eu mauris. Ut in iaculis sapien.
        </p>
        <p>
          In vitae rhoncus arcu. Maecenas elementum nunc quis magna finibus,
          vitae imperdiet diam pulvinar. Phasellus sit amet nibh eu massa
          facilisis luctus. Nulla ullamcorper sodales ante id vestibulum. Fusce
          felis nisi, lacinia sit amet mauris vel, euismod suscipit neque.
          Mauris quis libero eget enim facilisis pharetra. Fusce non ligula
          auctor nunc pretium dignissim eget eget turpis. Nam ultricies dolor ac
          libero maximus vestibulum. Mauris et tortor vitae nisi ultrices
          vestibulum ac id mauris. Proin interdum dapibus sollicitudin.
          Phasellus ultricies vulputate sem id hendrerit. Cras eget posuere
          nunc, in placerat velit. Pellentesque sed ante at elit ornare
          efficitur. Donec sed condimentum nisl. Curabitur dapibus leo id ligula
          dignissim pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          tenetur rem atque ex rerum autem voluptate a ea deleniti aperiam!
          Placeat ratione optio reprehenderit necessitatibus, enim dicta nobis
          sunt cum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          rem, tenetur dolor consectetur tempore debitis quia non veritatis
          dolorem nulla cupiditate? Iusto hic dignissimos expedita fuga ullam
          cupiditate deleniti suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque
          illo officia necessitatibus in laborum minima nesciunt minus,
          asperiores tenetur repellat, incidunt qui iste illum totam repellendus
          dicta, eum ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          blanditiis numquam repellat quia voluptatem tenetur? Dignissimos
          consequuntur itaque quidem autem nulla ex magni. Distinctio
          exercitationem et ratione natus, alias ut?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsa
          earum perspiciatis et autem ipsam eos delectus veniam dolorum, ipsum
          numquam odio modi nam vero, molestias, distinctio molestiae
          laudantium. Vitae.
        </p>
        <p>
          In vitae rhoncus arcu. Maecenas elementum nunc quis magna finibus,
          vitae imperdiet diam pulvinar. Phasellus sit amet nibh eu massa
          facilisis luctus. Nulla ullamcorper sodales ante id vestibulum. Fusce
          felis nisi, lacinia sit amet mauris vel, euismod suscipit neque.
          Mauris quis libero eget enim facilisis pharetra. Fusce non ligula
          auctor nunc pretium dignissim eget eget turpis. Nam ultricies dolor ac
          libero maximus vestibulum. Mauris et tortor vitae nisi ultrices
          vestibulum ac id mauris. Proin interdum dapibus sollicitudin.
          Phasellus ultricies vulputate sem id hendrerit. Cras eget posuere
          nunc, in placerat velit. Pellentesque sed ante at elit ornare
          efficitur. Donec sed condimentum nisl. Curabitur dapibus leo id ligula
          dignissim pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          tenetur rem atque ex rerum autem voluptate a ea deleniti aperiam!
          Placeat ratione optio reprehenderit necessitatibus, enim dicta nobis
          sunt cum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          rem, tenetur dolor consectetur tempore debitis quia non veritatis
          dolorem nulla cupiditate? Iusto hic dignissimos expedita fuga ullam
          cupiditate deleniti suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque
          illo officia necessitatibus in laborum minima nesciunt minus,
          asperiores tenetur repellat, incidunt qui iste illum totam repellendus
          dicta, eum ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          blanditiis numquam repellat quia voluptatem tenetur? Dignissimos
          consequuntur itaque quidem autem nulla ex magni. Distinctio
          exercitationem et ratione natus, alias ut?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsa
          earum perspiciatis et autem ipsam eos delectus veniam dolorum, ipsum
          numquam odio modi nam vero, molestias, distinctio molestiae
          laudantium. Vitae.
        </p>
      </main>
    </div>
  );
}
