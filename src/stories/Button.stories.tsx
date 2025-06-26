import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { 
  ArrowRight, 
  ShoppingCart, 
  Heart, 
  CheckCircle, 
  AlertTriangle, 
  Search,
  Menu
} from "lucide-react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default", 
        "destructive", 
        "outline", 
        "secondary", 
        "ghost", 
        "link", 
        "success", 
        "gradient"
      ],
      description: "The visual style of the button"
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button"
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled"
    },
    children: {
      control: "text",
      description: "The content of the button"
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Basic button
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="success">Success</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" icon={Search} aria-label="Search" />
    </div>
  ),
};

// With icons - left position
export const WithIconsLeft: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button icon={ArrowRight}>Continue</Button>
      <Button variant="secondary" icon={ShoppingCart}>Add to Cart</Button>
      <Button variant="outline" icon={Heart}>Favorite</Button>
      <Button variant="success" icon={CheckCircle}>Complete</Button>
    </div>
  ),
};

// With icons - right position
export const WithIconsRight: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button icon={ArrowRight} iconPosition="right">Next</Button>
      <Button variant="destructive" icon={AlertTriangle} iconPosition="right">Warning</Button>
      <Button variant="ghost" icon={Menu} iconPosition="right">Menu</Button>
      <Button variant="gradient" icon={ArrowRight} iconPosition="right">Explore</Button>
    </div>
  ),
};

// Icon-only buttons
export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button size="icon" icon={Search} aria-label="Search" />
      <Button size="icon" variant="destructive" icon={AlertTriangle} aria-label="Alert" />
      <Button size="icon" variant="outline" icon={Heart} aria-label="Favorite" />
      <Button size="icon" variant="secondary" icon={ShoppingCart} aria-label="Cart" />
      <Button size="icon" variant="ghost" icon={Menu} aria-label="Menu" />
      <Button size="icon" variant="success" icon={CheckCircle} aria-label="Success" />
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default</Button>
      <Button disabled variant="destructive">Destructive</Button>
      <Button disabled variant="outline">Outline</Button>
      <Button disabled variant="success" icon={CheckCircle}>Success</Button>
    </div>
  ),
};

// With custom class names
export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button className="bg-purple-600 hover:bg-purple-700">
        Custom Color
      </Button>
      <Button className="border-dashed" variant="outline">
        Dashed Border
      </Button>
      <Button className="font-bold tracking-widest uppercase text-xs">
        Custom Typography
      </Button>
    </div>
  ),
};