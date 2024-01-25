export interface ProjectDetailProps {
    _id: string;
  slug: string;
  name: string;
  description: string;
  blockchain?: string;
  imageUrl?: string;
  bannerUrl?: string;
  review?: string;
  rating?: number;
  whitelist: boolean;
  featured: boolean;
  verified: boolean;
  prevFollower?: number;
  currFollower?: number;
  accountCreated?: Date;
  mintInfo?: MintInfo;
  social?: Social;
  tags?: string[];

  createdAt?: Date;
  updatedAt?: Date;
}
interface MintInfo {
  // Define properties inside the MintInfo object if needed
  // For example:
  // mintDate: string;
  // mintPrice: number;
}

interface Social {
  // Define properties inside the SocialInfo object if needed
  // For example:
  // twitter: string;
  // discord: string;
}

interface Tag {
  // Define properties inside the Tag object if needed
  // For example:
  // name: string;
}