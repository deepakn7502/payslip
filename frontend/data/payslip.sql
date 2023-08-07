-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2023 at 09:29 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payslip`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminuser_employee`
--

CREATE TABLE `adminuser_employee` (
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `eid` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `department` varchar(20) NOT NULL,
  `acc_no` varchar(25) NOT NULL,
  `bank` varchar(50) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `pan` varchar(20) NOT NULL,
  `uan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminuser_employee`
--

INSERT INTO `adminuser_employee` (`password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `eid`, `designation`, `department`, `acc_no`, `bank`, `branch`, `pan`, `uan`) VALUES
('pbkdf2_sha256$600000$GwSDgBSubFdwHOViW8hokf$K4EtbGWoCcmIvLhlUtlCEfClJKdMI/ldI1AHlspGj1M=', NULL, 1, 'arun', '', '', '', 1, 1, '2023-08-07 06:07:27.248069', '', '', '', '', '', '', '', 0),
('1234', NULL, 0, '1000', 'Corbin', '', '', 0, 0, '0000-00-00 00:00:00.000000', '1000', 'Professor', 'AIML', '4087917754', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('dG2>m`T(9_Yc=B', NULL, 0, '10007', 'Kendal', '', '', 0, 0, '0000-00-00 00:00:00.000000', '10007', 'Professor', 'EEE', '2444905660', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('zI1`Vofe_', NULL, 0, '13886', 'Jasmina', '', '', 0, 0, '0000-00-00 00:00:00.000000', '13886', 'ASST.Professor', 'AIDS', '0970112955', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('uX1%QtB`', NULL, 0, '15259', 'Rikki', '', '', 0, 0, '0000-00-00 00:00:00.000000', '15259', 'Hod', 'AIDS', '7048656840', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('lQ2@FFy!W?Hle', NULL, 0, '16770', 'Niko', '', '', 0, 0, '0000-00-00 00:00:00.000000', '16770', 'Hod', 'AIML', '6245113911', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('bS6_HFx|n6vUK}d', NULL, 0, '17238', 'Gonzales', '', '', 0, 0, '0000-00-00 00:00:00.000000', '17238', 'Hod', 'ECE', '5340848515', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('dB9}(cAz', NULL, 0, '19756', 'Sarita', '', '', 0, 0, '0000-00-00 00:00:00.000000', '19756', 'ASST.Professor', 'ECE', '3640627024', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('qE1&F(,$5q<}%', NULL, 0, '21161', 'Ardelis', '', '', 0, 0, '0000-00-00 00:00:00.000000', '21161', 'ASST.Professor', 'AIDS', '8744194471', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('tS8|?6z)o=7KDaj<', NULL, 0, '21269', 'Neille', '', '', 0, 0, '0000-00-00 00:00:00.000000', '21269', 'Asso.Professor', 'AIDS', '0851720900', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('cN1%oQ4.&', NULL, 0, '22872', 'Dannie', '', '', 0, 0, '0000-00-00 00:00:00.000000', '22872', 'Asso.Professor', 'CSE', '8953702348', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('kQ9>FFE/X', NULL, 0, '2317', 'Eduard', '', '', 0, 0, '0000-00-00 00:00:00.000000', '2317', 'Asso.Professor', 'AIML', '9282308790', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('pP2(ypeJz%E6=?gE', NULL, 0, '25909', 'Garry', '', '', 0, 0, '0000-00-00 00:00:00.000000', '25909', 'Asso.Professor', 'ECE', '2205460161', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('uL6.9FngG5orsm/', NULL, 0, '26478', 'Geoff', '', '', 0, 0, '0000-00-00 00:00:00.000000', '26478', 'ASST.Professor', 'AIML', '7263286289', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('rN7$tV11p*l', NULL, 0, '27725', 'Doti', '', '', 0, 0, '0000-00-00 00:00:00.000000', '27725', 'Hod', 'ECE', '8512962038', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('dU0>v&`xhv|.VX,', NULL, 0, '31774', 'Andrea', '', '', 0, 0, '0000-00-00 00:00:00.000000', '31774', 'Professor', 'AIDS', '1397769963', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('yP3?qq\'cRHNN', NULL, 0, '3206', 'Baron', '', '', 0, 0, '0000-00-00 00:00:00.000000', '3206', 'Hod', 'CSE', '8842004324', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('nG6(E}VZ=t!', NULL, 0, '33080', 'Valli', '', '', 0, 0, '0000-00-00 00:00:00.000000', '33080', 'Asso.Professor', 'CSE', '5686158401', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('pE1&H2uxq', NULL, 0, '33318', 'Jaquelin', '', '', 0, 0, '0000-00-00 00:00:00.000000', '33318', 'Professor', 'ECE', '4284728105', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('yC9*$KpmvbmqYm', NULL, 0, '36892', 'Godiva', '', '', 0, 0, '0000-00-00 00:00:00.000000', '36892', 'Professor', 'ECE', '7744163052', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('oT7\"m~>d', NULL, 0, '40153', 'Chanda', '', '', 0, 0, '0000-00-00 00:00:00.000000', '40153', 'Professor', 'EEE', '4678019251', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('cX7<rWx9.dkJF/R|', NULL, 0, '40855', 'Milty', '', '', 0, 0, '0000-00-00 00:00:00.000000', '40855', 'Professor', 'ECE', '6120937358', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('vO3+?XH$+D*', NULL, 0, '4139', 'June', '', '', 0, 0, '0000-00-00 00:00:00.000000', '4139', 'Professor', 'ECE', '2509153803', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('cH0=pX(CLP4\"tg`', NULL, 0, '45646', 'Danella', '', '', 0, 0, '0000-00-00 00:00:00.000000', '45646', 'Asso.Professor', 'ECE', '3526682275', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('pL6#bzHp}h+x(', NULL, 0, '46715', 'Dagny', '', '', 0, 0, '0000-00-00 00:00:00.000000', '46715', 'Asso.Professor', 'AIML', '5516213495', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('mK9/45M@5', NULL, 0, '47551', 'Kath', '', '', 0, 0, '0000-00-00 00:00:00.000000', '47551', 'Hod', 'ECE', '1803972807', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('oS78{k2)OJc', NULL, 0, '48615', 'Devi', '', '', 0, 0, '0000-00-00 00:00:00.000000', '48615', 'Professor', 'ECE', '6689027791', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('tQ8?Y*C+afD', NULL, 0, '49198', 'Cacilia', '', '', 0, 0, '0000-00-00 00:00:00.000000', '49198', 'ASST.Professor', 'AIML', '5173972564', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('jO4$GlX=aWDf\'', NULL, 0, '50202', 'Maighdiln', '', '', 0, 0, '0000-00-00 00:00:00.000000', '50202', 'ASST.Professor', 'AIDS', '9399596516', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('eZ4)r0,z?X', NULL, 0, '51484', 'Bevan', '', '', 0, 0, '0000-00-00 00:00:00.000000', '51484', 'Asso.Professor', 'ECE', '4483507109', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('vJ0*dCACtsoiZ3', NULL, 0, '52602', 'Hernando', '', '', 0, 0, '0000-00-00 00:00:00.000000', '52602', 'Professor', 'ECE', '3055409817', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('cW0/zMsGKC', NULL, 0, '54072', 'Ivie', '', '', 0, 0, '0000-00-00 00:00:00.000000', '54072', 'ASST.Professor', 'EEE', '5310458913', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('zF9#.\"k!)', NULL, 0, '55856', 'Nathalie', '', '', 0, 0, '0000-00-00 00:00:00.000000', '55856', 'Asso.Professor', 'ECE', '9075527357', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('wP7_A<8w', NULL, 0, '56952', 'Clevey', '', '', 0, 0, '0000-00-00 00:00:00.000000', '56952', 'Asso.Professor', 'CSE', '8624455987', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('aJ2(e|i_M*ESL0I', NULL, 0, '5918', 'Helga', '', '', 0, 0, '0000-00-00 00:00:00.000000', '5918', 'Hod', 'EEE', '5894221854', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('iS0#huTIg\'(~Z', NULL, 0, '61915', 'Beulah', '', '', 0, 0, '0000-00-00 00:00:00.000000', '61915', 'Hod', 'CSE', '1453529624', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('rZ7ciaJhgMtkP', NULL, 0, '61995', 'Rina', '', '', 0, 0, '0000-00-00 00:00:00.000000', '61995', 'ASST.Professor', 'ECE', '0730378241', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('wN5~,i>2|2D', NULL, 0, '70299', 'Kathleen', '', '', 0, 0, '0000-00-00 00:00:00.000000', '70299', 'Asso.Professor', 'EEE', '6851681153', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('wT6$JS$(Dx+0>', NULL, 0, '72323', 'Tiphanie', '', '', 0, 0, '0000-00-00 00:00:00.000000', '72323', 'Asso.Professor', 'AIML', '4208869623', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('hR6?_xEfd+V', NULL, 0, '77948', 'Ilysa', '', '', 0, 0, '0000-00-00 00:00:00.000000', '77948', 'ASST.Professor', 'AIDS', '8367435176', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('yA1!9Q_VuFs@Nz', NULL, 0, '78025', 'Elana', '', '', 0, 0, '0000-00-00 00:00:00.000000', '78025', 'Professor', 'AIML', '9450296111', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('nS3,}Knz6GWMO', NULL, 0, '79488', 'Kristoforo', '', '', 0, 0, '0000-00-00 00:00:00.000000', '79488', 'Asso.Professor', 'AIDS', '3542354902', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('vX7`fZCYz`yy', NULL, 0, '80592', 'Gerda', '', '', 0, 0, '0000-00-00 00:00:00.000000', '80592', 'ASST.Professor', 'AIML', '6437474823', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('zN4)3KrCR{FGp', NULL, 0, '81560', 'Vivie', '', '', 0, 0, '0000-00-00 00:00:00.000000', '81560', 'Professor', 'ECE', '8172838751', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('fI0/ZrxG', NULL, 0, '83283', 'Babara', '', '', 0, 0, '0000-00-00 00:00:00.000000', '83283', 'Professor', 'CSE', '3690974445', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('kM6.Ier~tbDl)~VY', NULL, 0, '8531', 'Susanetta', '', '', 0, 0, '0000-00-00 00:00:00.000000', '8531', 'Professor', 'EEE', '1774270188', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('sJ5<GWxRv+', NULL, 0, '88094', 'Abagael', '', '', 0, 0, '0000-00-00 00:00:00.000000', '88094', 'Asso.Professor', 'AIDS', '6532413410', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('pW1\'D/Oq$', NULL, 0, '88559', 'Laure', '', '', 0, 0, '0000-00-00 00:00:00.000000', '88559', 'Asso.Professor', 'AIML', '8653481559', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('aJ7/NlpJu76!S', NULL, 0, '891', 'Moises', '', '', 0, 0, '0000-00-00 00:00:00.000000', '891', 'Professor', 'EEE', '1981148442', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('zF4%<+KO', NULL, 0, '97019', 'Jasmina', '', '', 0, 0, '0000-00-00 00:00:00.000000', '97019', 'Hod', 'CSE', '3134080397', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436),
('fJ6*{~K5DF|sW)', NULL, 0, '99906', 'Benyamin', '', '', 0, 0, '0000-00-00 00:00:00.000000', '99906', 'Professor', 'CSE', '2887183842', 'Axis Bank', 'Kilpauk', 'AEZ129436', 129436);

-- --------------------------------------------------------

--
-- Table structure for table `adminuser_employee_groups`
--

CREATE TABLE `adminuser_employee_groups` (
  `id` bigint(20) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminuser_employee_user_permissions`
--

CREATE TABLE `adminuser_employee_user_permissions` (
  `id` bigint(20) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminuser_receipt`
--

CREATE TABLE `adminuser_receipt` (
  `id` bigint(20) NOT NULL,
  `basic` int(11) NOT NULL,
  `lop` int(11) NOT NULL,
  `basic1` int(11) NOT NULL,
  `hra` int(11) NOT NULL,
  `da` int(11) NOT NULL,
  `pf` int(11) NOT NULL,
  `pt` int(11) NOT NULL,
  `it` int(11) NOT NULL,
  `miscellaneous` int(11) NOT NULL,
  `esi` int(11) NOT NULL,
  `deductions` int(11) NOT NULL,
  `total_deductions` int(11) NOT NULL,
  `total_earnings` int(11) NOT NULL,
  `net_salary` int(11) NOT NULL,
  `month` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `eid_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminuser_receipt`
--

INSERT INTO `adminuser_receipt` (`id`, `basic`, `lop`, `basic1`, `hra`, `da`, `pf`, `pt`, `it`, `miscellaneous`, `esi`, `deductions`, `total_deductions`, `total_earnings`, `net_salary`, `month`, `status`, `eid_id`) VALUES
(1, 30514, 143515, 54654, 203508, 962570, 62793, 54902, 1, 34426, 78289, 29871, 12129, 20811, 23337, 'APR-23', 0, '1000'),
(2, 35074, 759212, 54654, 687133, 350911, 58089, 33785, 2, 36788, 38501, 42431, 14345, 63447, 71616, 'OCT-23', 0, '88094'),
(3, 46360, 667500, 54654, 241333, 261107, 49696, 76750, 1, 76873, 57917, 61781, 8974, 45070, 28719, 'MAR-23', 0, '77948'),
(4, 98888, 730898, 54654, 272748, 430282, 79612, 36682, 1, 37231, 50314, 42999, 12505, 25878, 16081, 'MAR-23', 0, '27725'),
(5, 75215, 515879, 54654, 684171, 818624, 36763, 66975, 0, 33141, 70998, 43091, 15160, 30573, 46845, 'SEP-23', 0, '72323'),
(6, 81519, 688574, 54654, 650144, 135644, 39798, 57908, 2, 52088, 31989, 61943, 9685, 41407, 35842, 'JUN-23', 0, '52602'),
(7, 20242, 80086, 54654, 172257, 114235, 75887, 45107, 0, 22147, 21074, 29327, 10536, 32900, 64527, 'MAY-23', 0, '61915'),
(8, 99432, 486018, 54654, 951830, 823830, 61875, 30406, 2, 16531, 72422, 51371, 14430, 27400, 43215, 'JAN-23', 0, '5918'),
(9, 93745, 246674, 54654, 9685, 881884, 26352, 55774, 1, 25141, 33639, 17658, 11536, 59066, 34079, 'MAY-23', 0, '891'),
(10, 50621, 279552, 54654, 166162, 372151, 43459, 50977, 2, 30521, 47937, 33033, 8513, 77472, 46286, 'APR-23', 0, '17238'),
(11, 26857, 390482, 54654, 754006, 567857, 48861, 75353, 2, 16653, 39183, 65931, 15629, 63484, 30984, 'AUG-23', 0, '13886'),
(12, 96121, 993327, 54654, 583955, 88232, 72876, 79214, 1, 69897, 43874, 70495, 10105, 45034, 52273, 'DEC-23', 0, '55856'),
(13, 86559, 282931, 54654, 221085, 213089, 16220, 27981, 0, 34857, 44115, 56102, 8521, 39068, 25034, 'MAY-23', 0, '46715'),
(14, 18559, 785330, 54654, 446631, 171508, 72012, 30043, 0, 76448, 69735, 39944, 10611, 20854, 47167, 'OCT-23', 0, '3206'),
(15, 35030, 829286, 54654, 414691, 107648, 51349, 23205, 1, 76254, 29155, 69330, 14328, 62344, 17325, 'AUG-23', 0, '81560'),
(16, 35679, 171836, 54654, 772678, 716885, 71273, 68118, 1, 47143, 33480, 69101, 11378, 36773, 34634, 'AUG-23', 0, '50202'),
(17, 38542, 985469, 54654, 560841, 444488, 25678, 63027, 1, 26055, 27891, 44512, 13577, 64215, 57007, 'MAR-23', 0, '25909'),
(18, 45441, 694414, 54654, 12457, 249184, 28926, 56900, 2, 37686, 49034, 36401, 8693, 25388, 17803, 'APR-23', 0, '61995'),
(19, 84049, 987186, 54654, 45479, 493829, 56645, 19515, 2, 59010, 20253, 21426, 9466, 69807, 59546, 'SEP-23', 0, '54072'),
(20, 39852, 737628, 54654, 17465, 32839, 66173, 51594, 1, 75474, 48374, 28547, 14859, 79432, 32876, 'MAY-23', 0, '21161'),
(21, 45201, 708695, 54654, 822378, 669753, 57694, 64672, 1, 35783, 42809, 56946, 15562, 40666, 65458, 'DEC-23', 0, '8531'),
(22, 26454, 679945, 54654, 195900, 28614, 74853, 24319, 0, 54455, 20380, 60597, 13055, 41363, 72554, 'JAN-23', 0, '33318'),
(23, 50853, 666651, 54654, 656015, 211210, 53625, 21036, 0, 70764, 55499, 69818, 12977, 41815, 54671, 'JUL-23', 0, '97019'),
(24, 19700, 507032, 54654, 68248, 624462, 48384, 44993, 1, 60769, 79921, 57535, 14885, 74916, 24442, 'JAN-23', 0, '47551'),
(25, 56250, 866907, 54654, 647263, 539102, 68420, 45645, 0, 26446, 73466, 30112, 9479, 32521, 27848, 'APR-23', 0, '31774'),
(26, 64379, 999772, 54654, 595507, 339638, 73279, 45512, 2, 37710, 54559, 76407, 8585, 79093, 23006, 'MAY-23', 0, '83283'),
(27, 31656, 503804, 54654, 236638, 927443, 69642, 39923, 1, 27294, 65414, 66308, 9427, 75635, 70328, 'NOV-23', 0, '21269'),
(28, 34384, 256150, 54654, 366571, 636021, 41488, 44013, 2, 47734, 62114, 40062, 15397, 75154, 64736, 'JUL-23', 0, '22872'),
(29, 48767, 916992, 54654, 165271, 903251, 43393, 43419, 1, 41060, 44608, 26079, 9518, 43906, 62932, 'JAN-23', 0, '26478'),
(30, 31504, 990062, 54654, 965431, 371147, 57788, 45295, 2, 65203, 22368, 29163, 15438, 71433, 70881, 'MAR-23', 0, '4139'),
(31, 88684, 332866, 54654, 758765, 93712, 45336, 78062, 2, 30598, 36700, 17432, 10142, 20007, 16018, 'JAN-23', 0, '80592'),
(32, 33386, 438830, 54654, 369905, 429105, 43466, 76913, 0, 56334, 55436, 66560, 14262, 43370, 28076, 'JUL-23', 0, '99906'),
(33, 99169, 241626, 54654, 143978, 126199, 39631, 49589, 0, 39525, 45815, 77272, 12750, 63097, 46632, 'NOV-23', 0, '45646'),
(34, 85219, 796964, 54654, 223607, 192448, 36224, 79188, 1, 70951, 46925, 49295, 8243, 21293, 49465, 'MAY-23', 0, '88559'),
(35, 25131, 89712, 54654, 116627, 847283, 59571, 51169, 0, 76697, 61943, 22189, 12771, 56507, 67591, 'MAR-23', 0, '51484'),
(36, 30388, 614046, 54654, 236997, 874759, 48749, 16050, 2, 44538, 41743, 73727, 12144, 53580, 44910, 'JUN-23', 0, '78025'),
(37, 24172, 407369, 54654, 607738, 1693, 61965, 56798, 1, 36106, 43903, 28474, 11797, 62086, 49906, 'APR-23', 0, '16770'),
(38, 29765, 463635, 54654, 539251, 495358, 75527, 33583, 1, 19641, 41994, 39155, 13472, 22240, 33443, 'NOV-23', 0, '15259'),
(39, 92312, 592551, 54654, 322595, 457473, 50550, 78120, 0, 18712, 33757, 65817, 10851, 50601, 26498, 'OCT-23', 0, '40153'),
(40, 19031, 658201, 54654, 946357, 709422, 25238, 72059, 0, 76193, 65046, 55175, 13000, 65492, 29488, 'DEC-23', 0, '2317'),
(41, 55648, 339470, 54654, 208535, 279761, 63595, 27772, 0, 76346, 75802, 48092, 11841, 66039, 35382, 'JUN-23', 0, '10007'),
(42, 46598, 21626, 54654, 136937, 409599, 31797, 67687, 0, 72266, 51080, 41416, 10160, 61720, 41533, 'FEB-23', 0, '36892'),
(43, 53392, 612199, 54654, 61971, 493627, 63568, 35249, 0, 68364, 17105, 28331, 13003, 69845, 49683, 'FEB-23', 0, '48615'),
(44, 72422, 272118, 54654, 202221, 326923, 17522, 39586, 0, 78907, 75739, 51899, 12847, 21686, 41761, 'MAY-23', 0, '56952'),
(45, 97548, 11627, 54654, 291587, 163821, 18472, 46109, 0, 78565, 67091, 25425, 13726, 76378, 36591, 'DEC-23', 0, '40855'),
(46, 81705, 434420, 54654, 496831, 828287, 45500, 71752, 2, 48796, 69756, 49556, 11634, 60476, 27604, 'MAY-23', 0, '79488'),
(47, 20266, 933837, 54654, 248163, 70082, 70222, 74857, 1, 28847, 68405, 78496, 8431, 69843, 70650, 'FEB-23', 0, '19756'),
(48, 58141, 440335, 54654, 665382, 844278, 67686, 37537, 0, 26221, 42597, 30577, 14909, 71148, 16496, 'DEC-23', 0, '49198'),
(49, 18373, 317519, 54654, 518219, 30478, 78237, 40309, 2, 38628, 50144, 71330, 13849, 65571, 31658, 'FEB-23', 0, '33080'),
(50, 42296, 240951, 54654, 990987, 411264, 34821, 17914, 2, 24227, 20199, 67077, 14221, 54211, 72948, 'FEB-23', 0, '70299');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_employee'),
(22, 'Can change user', 6, 'change_employee'),
(23, 'Can delete user', 6, 'delete_employee'),
(24, 'Can view user', 6, 'view_employee'),
(25, 'Can add receipt', 7, 'add_receipt'),
(26, 'Can change receipt', 7, 'change_receipt'),
(27, 'Can delete receipt', 7, 'delete_receipt'),
(28, 'Can view receipt', 7, 'view_receipt');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(6, 'adminuser', 'employee'),
(7, 'adminuser', 'receipt'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'contenttypes', 'contenttype'),
(5, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-08-07 06:05:44.079646'),
(2, 'contenttypes', '0002_remove_content_type_name', '2023-08-07 06:05:44.735405'),
(3, 'auth', '0001_initial', '2023-08-07 06:05:48.612301'),
(4, 'auth', '0002_alter_permission_name_max_length', '2023-08-07 06:05:49.580117'),
(5, 'auth', '0003_alter_user_email_max_length', '2023-08-07 06:05:49.727708'),
(6, 'auth', '0004_alter_user_username_opts', '2023-08-07 06:05:49.794043'),
(7, 'auth', '0005_alter_user_last_login_null', '2023-08-07 06:05:49.840462'),
(8, 'auth', '0006_require_contenttypes_0002', '2023-08-07 06:05:49.868239'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2023-08-07 06:05:49.907141'),
(10, 'auth', '0008_alter_user_username_max_length', '2023-08-07 06:05:49.971629'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2023-08-07 06:05:50.050940'),
(12, 'auth', '0010_alter_group_name_max_length', '2023-08-07 06:05:50.168286'),
(13, 'auth', '0011_update_proxy_permissions', '2023-08-07 06:05:50.212767'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2023-08-07 06:05:50.251441'),
(15, 'adminuser', '0001_initial', '2023-08-07 06:05:54.879374'),
(16, 'admin', '0001_initial', '2023-08-07 06:05:56.652217'),
(17, 'admin', '0002_logentry_remove_auto_add', '2023-08-07 06:05:56.716798'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2023-08-07 06:05:56.837826'),
(19, 'sessions', '0001_initial', '2023-08-07 06:05:57.557372'),
(20, 'adminuser', '0002_remove_employee_uan', '2023-08-07 06:07:13.277616'),
(21, 'adminuser', '0003_employee_uan', '2023-08-07 06:08:01.595139'),
(22, 'adminuser', '0004_rename_totaldeductions_receipt_total_deductions_and_more', '2023-08-07 07:19:20.097964'),
(23, 'adminuser', '0005_receipt_basic1', '2023-08-07 07:26:12.903312');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminuser_employee`
--
ALTER TABLE `adminuser_employee`
  ADD PRIMARY KEY (`eid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `adminuser_employee_groups`
--
ALTER TABLE `adminuser_employee_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `adminuser_employee_groups_employee_id_group_id_5e03953b_uniq` (`employee_id`,`group_id`),
  ADD KEY `adminuser_employee_groups_group_id_a0e4716a_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `adminuser_employee_user_permissions`
--
ALTER TABLE `adminuser_employee_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `adminuser_employee_user__employee_id_permission_i_9f7166d2_uniq` (`employee_id`,`permission_id`),
  ADD KEY `adminuser_employee_u_permission_id_ae0ba938_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `adminuser_receipt`
--
ALTER TABLE `adminuser_receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminuser_receipt_eid_id_00540f96_fk_adminuser_employee_eid` (`eid_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_adminuser_employee_eid` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminuser_employee_groups`
--
ALTER TABLE `adminuser_employee_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adminuser_employee_user_permissions`
--
ALTER TABLE `adminuser_employee_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adminuser_receipt`
--
ALTER TABLE `adminuser_receipt`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adminuser_employee_groups`
--
ALTER TABLE `adminuser_employee_groups`
  ADD CONSTRAINT `adminuser_employee_g_employee_id_b2840413_fk_adminuser` FOREIGN KEY (`employee_id`) REFERENCES `adminuser_employee` (`eid`),
  ADD CONSTRAINT `adminuser_employee_groups_group_id_a0e4716a_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `adminuser_employee_user_permissions`
--
ALTER TABLE `adminuser_employee_user_permissions`
  ADD CONSTRAINT `adminuser_employee_u_employee_id_82f2de57_fk_adminuser` FOREIGN KEY (`employee_id`) REFERENCES `adminuser_employee` (`eid`),
  ADD CONSTRAINT `adminuser_employee_u_permission_id_ae0ba938_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);

--
-- Constraints for table `adminuser_receipt`
--
ALTER TABLE `adminuser_receipt`
  ADD CONSTRAINT `adminuser_receipt_eid_id_00540f96_fk_adminuser_employee_eid` FOREIGN KEY (`eid_id`) REFERENCES `adminuser_employee` (`eid`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_adminuser_employee_eid` FOREIGN KEY (`user_id`) REFERENCES `adminuser_employee` (`eid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
