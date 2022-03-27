-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2022 at 09:42 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_react`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `desc`, `created_at`, `updated_at`) VALUES
(1, 'product', '200.00', 'products/ySijxbJCrMP96vR68aKdNvWWZpv561CCUyJ4JT1D.jpg', 'asdasdasd', NULL, NULL),
(2, 'Deleniti ex dolore e', '22.00', 'products/fec01oCYPxYdWGes1aaK08XSCBAlDU64E9SYzMYf.jpg', 'Laudantium dolores', NULL, NULL),
(3, 'Deleniti ex dolore e', '22.00', 'products/w1XuZXL3wTWDH0xRWBFXkH8i1fTYz6ss8HOIqtOI.jpg', 'Laudantium dolores', NULL, NULL),
(4, 'product', '200.00', 'products/P6ybGdJaSq9p5m0ANTnzNyUc17gANygzWg013cuw.jpg', 'asdasdasd', '2022-03-27 19:03:46', '2022-03-27 19:03:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'ratin', 'admin@gmail.com', '$2y$10$Zd0afl3oSjSpTf0E/fz.fezP6.d12WWwhfLAyXFwIUp0F2mYlUUle'),
(2, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$QQFoK0Y5hEDrtl/5Q/PPBeSkJ7u1yH73lKU7uXOQTDQa.OV9NAWYu'),
(3, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$6wf2Bee4vTsyEzovV7bV7OWW0CJrRoPqXOrOI.mQccFTABjqtNY4q'),
(4, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$7cSx6AlaIUTDnwCP3vcW8.i9VIqDlflqcL5/ArKP9M1ryprHDx8ly'),
(5, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$2gLAsguzfP8z0UjJRWkHU.rFYkxZvQTnjWw.Mv4cni8jwD0F780Ym'),
(6, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$eni4KUJP6Uwd.7SEDnG2Y.Hf1Cc/IhJiVo3yE4iiN7pAP5Sgt6.0m'),
(7, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$xoASR5.aNWo/J0w/EWvV2Os6jSp9XMoCivho7PwXxRTtzb8P9adCu'),
(8, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$gBRr5EaaQ4AONXMZ/JAtq.u8jKzDPnbWFXrEHYX5M7VejUoGqkiiW'),
(9, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$f24LOIYBSb/ro/VAuwrm9utiAxFjcdIaJzBWC4OxgZk3jGXrKvkHK'),
(10, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$RmzAPxtKP0r5v3d9dfcdxeMp02wyxjNAFBsZnw6eOvGKTSEf22jjG'),
(11, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$W0EtYxMjcb40brPv/mLU2unCPsAXxkhXhsAsoRwOvl4ECv2H2IKnm'),
(12, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$Kn5WrhjHtnd8IiUy76HYJ.iY3r5RM.xXeVsznKcn/uwYbQkRG9oOy'),
(13, 'Lorem culpa adipisi', 'Nihil et ea ut ad qu', '$2y$10$cUiNeqnqChx2ytufZtT5UuEu4qfZD6A7LwOsXYYegQMyaBDRF9BPm'),
(14, 'ratin', 'admin@gmail.com', '$2y$10$z5x4heLJQJR0ccUZSBnO8OpaeYMlPurQ3.Z.Sxp1.bV3yCYokCOWS'),
(15, 'ratin', 'admin@gmail.com', '$2y$10$QflOfU/BFh8mhk03AwZKV.MmxCP3NDj8AgzrMrN6cNINBdokfBd5.'),
(16, 'Ut eos suscipit eos', 'vomur@mailinator.com', '$2y$10$2bGTGZD7D7TM5QXH1K14VO0CDaEDQl1x9v109cBN2mRsV4LsPhPM2'),
(17, 'Ut eos suscipit eos', 'vomur@mailinator.com', '$2y$10$T//ET0RXrcUvc1g3JZySe.gH9bwOMSmSJrSY5903qknMOWaz0xpg6'),
(18, 'Ut eos suscipit eos', 'vomur@mailinator.com', '$2y$10$rKiZAco5sUYN0tYwl3X2SO7WrRxXHqRKzH5ez1ucELnxb.DFbEoVC'),
(19, 'Anim atque esse culp', 'cucemoj@mailinator.com', '$2y$10$lM4eO2WgaCJgny859dGOf.F420STERTGekPCYvs23ancFWXqJ5eeu'),
(20, 'Quas aut ea ipsam qu', 'jumakupuho@mailinator.com', '$2y$10$dOxEwZuzwHKNul7lEw5IKe8bmaNiz9UWsAk3OcoyuSeCdYCkOFZHi'),
(21, 'Dolor est ex aut sit', 'vutid@mailinator.com', '$2y$10$d15MODQa1cZNhVeDtIXsr.dbFRpfLArm1DJmK7PRxYDGCDmmIfnBe'),
(22, 'Sapiente qui adipisc', 'pedym@mailinator.com', '$2y$10$CBG/Gvee7ISzlxZn.aR7QObQg9GTFhX8xZ/EAs/yIUa.4hn5QOHh.'),
(23, 'Aut et et qui quis e', 'kisunevaty@mailinator.com', '$2y$10$ZZpvFp3yvbTQv5xTPM2VuOK34.HXMFqDLTwLJK/X4SVefwW/GzE9y'),
(24, 'Id atque qui assume', 'nisaq@mailinator.com', '$2y$10$il4yLpSq2hApyS0z31Xfte4GTG5YCzzujmDHbgqwFmWwbkVc5W44K');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
